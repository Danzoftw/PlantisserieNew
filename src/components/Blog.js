import Link from 'next/link';
import Image from 'next/image'
import { Button , Container, Row, Col} from 'react-bootstrap';

const post = ( props ) => {

    // console.warn('multipost',props.allItems.multiPostItems)
    console.warn('singlepost',props.allItems.postItems)

    // console.warn('blogItems', blogItems);
	return (
        <div className="pt-40">
            <section className="main-article-section theme bg-gardenia-color">
                <Container>
                    {props.allItems.postItems.map(( myItems ) => (
                    <Row className="py-md-5">
                        <Col xs={12} md={5} className="d-flex">
                               <Image
                               src={myItems.node.featuredImage.node.sourceUrl}
                               alt="Picture of the author"
                               width={400}
                               height={300}
                               />
                        </Col>
                        <Col xs={12} md={5} className="d-flex">
                            {myItems.node.categories.nodes.map(( myCategories ) => (
                                <div className="py-3 py-md-0 d-flex justify-content-center flex-column">
                                <p className="font-hk font-weight-600 gardenia-title theme color-color-2">{myCategories.name}</p>
                                <Link href={`/posts/${encodeURIComponent(myItems.node.slug)}`} key={myItems.node.id}>
                                    <span className="mb-2 font-recoleta font-weight-600 font-weight-normal gardenia-sub-title-font theme color-covid-color">{myItems.node.title}</span>
                                </Link>
                                <div
                                    dangerouslySetInnerHTML={ {
                                        __html: myItems.node.excerpt
                                    } }
                                    className="mb-0 theme color-covid-color paragraph-font font-hk font-weight-400 p-none"
                                />
                                </div>
                            ))}
                        </Col>
                    </Row>
                    ))}
                </Container>
            </section>
            <section className="sub-article-section pt-lg-5">
                <Container>
                    <Row>
                        {props.allItems.multiPostItems.map(( multiItems ) => (
                        <Col xs={12} md={{span: 6}}>
                            <div className="content pb-lg-5">
                                <div className="image">
                                    <Image
                                        src={multiItems.node.featuredImage.node.sourceUrl}
                                        alt="Picture of the author"
                                        width={400}
                                        height={300}
                                    />
                                    {multiItems.node.categories.nodes.map(( myCategories ) => (
                                    <div className="pt-4 content-wrapper">
                                        <p className="title font-hk font-weight-600 small-font theme color-color-2">{myCategories.name}</p>
                                        <Link href={`/posts/${encodeURIComponent(multiItems.node.slug)}`} key={multiItems.node.id}>
                                            <span className="sub-title font-recoleta font-weight-600 big-font theme color-covid-color">{multiItems.node.title}</span>
                                        </Link>
                                        <div
                                        dangerouslySetInnerHTML={ {
                                            __html: multiItems.node.excerpt,
                                        } }
                                        className="font-hk font-weight-400 paragraph-font theme color-covid-color"
                                        />
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default post;

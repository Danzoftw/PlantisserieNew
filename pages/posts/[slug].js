import Layout from "../../src/components/Layout";
import Link from 'next/link';
import Image from 'next/image'
import client from "../../src/components/ApolloClient";
// import GET_POST from "../../src/queries/get-post";
import GET_POSTS from "../../src/queries/get-post";
import beleaf from "../../src/img/beleaf.png";
import leftleaf from "../../src/img/leftleaf.png";
import rightleaf from "../../src/img/rightleaf.png";
import insta1 from "../../src/img/insta1.png";
import { Button , Container, Row, Col} from 'react-bootstrap';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://gmail.us6.list-manage.com/subscribe/post?u=7ac432477f34c80dc77f56229&amp;id=5a17070c4d";
const SimpleForm = () => <MailchimpSubscribe url={url}/>
export default function Post( data ){

    console.warn(data)
    const post = data.posts;

    const newDate = post.date.split('T')[0];
    const localeDate = newDate.toLocaleString();
    // console.warn("posts",data.posts1)
    return(
        <Layout>
            <section className="pt-48 main-article-section">
                <Container>
                    <Row className="flex-column align-items-center">
                        <Col xs={12} md={10} className="">
                            <div className="d-flex align-items-center justify-between">
                                <div className="py-3 py-md-0 d-flex justify-content-center flex-column">
                                    {post.categories.edges.map(( myCategories ) => (
                                        <p className="font-hk font-weight-600 gardenia-title theme color-color-2">{myCategories.node.name}</p>
                                    ))}
                                    <Link href="">
                                        <span className="mb-4 font-recoleta font-weight-600 font-weight-normal gardenia-sub-title-font theme color-covid-color">{post.title}</span>
                                    </Link>
                                </div>
                                <div>
                                    <div className="by d-flex">
                                        <p className="mb-0 pr-2 font-weight-600 theme color-covid-color">By</p>
                                    <p className="mb-0 font-weight-600 theme color-covid-color">
                                        {post.author.node.name}
                                    </p>
                                    </div>
                                    <p className="date theme color-covid-color very-small-font">{newDate}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="outer-img-div position-relative">
                    <Container>
                        <Row className="flex-column align-items-center">
                            <Col xs={12} md={10} className="">
                                <Image
                                    src={post.featuredImage.node.sourceUrl}
                                    alt="Picture of the author"
                                    width={1000}
                                    height={650}
                                />
                                <div className="position-absolute">
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="inner-img-div position-absolute theme bg-gardenia-color left-0 right-0">
                    </div>
                </div>
                <section className="post-section">
                    <Container className="pt-24">
                        <Row className="justify-content-center">
                            <Col xs={12} md={6}>
                                <article dangerouslySetInnerHTML={{__html: post.content}}></article>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="related-stories">
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>
                                <p className="py-5 big-font font-recoleta font-weight-600 text-center">Related Stories</p>
                            </Col>
                        </Row>
                            <Row>
                                <Col xs={12} md={2}>
                                </Col>
                                <Col xs={12} md={3} className="position-relative">
                                    <Image
                                        src={post.featuredImage.node.sourceUrl}
                                        alt="Picture of the author"
                                        width={300}
                                        height={200}
                                    />
                                    <div className="related-stories-content"></div>
                                </Col>
                                <Col xs={12} md={5} className="position-relative pr-0">
                                    <p className="font-hk font-weight-600 gardenia-title theme color-color-2">ARTICLE</p>
                                    <p className="very-big-font font-recoleta font-weight-600 theme color-covid-color">Looking for  a perfect gift?</p>
                                    <p className="font-weight-400 theme color-covid-color paragraph-font">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                    <div className="related-stories-content"></div>
                                </Col>
                                <Col xs={12} md={2}>
                                </Col>
                            </Row>
                            <Row className="pt-10">
                                <Col xs={12} md={2}>
                                </Col>
                                <Col xs={12} md={3} className="position-relative">
                                    <Image
                                        src={post.featuredImage.node.sourceUrl}
                                        alt="Picture of the author"
                                        width={300}
                                        height={200}
                                    />
                                    <div className="related-stories-content related-stories-content-hide"></div>
                                </Col>
                                <Col xs={12} md={5} className="position-relative pr-0">
                                    <p className="font-hk font-weight-600 gardenia-title theme color-color-2">ARTICLE</p>
                                    <p className="very-big-font font-recoleta font-weight-600 theme color-covid-color">Looking for  a perfect gift?</p>
                                    <p className="font-weight-400 theme color-covid-color paragraph-font">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                    <div className="related-stories-content related-stories-content-hide"></div>
                                </Col>
                                <Col xs={12} md={2}>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} className="my-5 d-flex justify-content-center">
                                    <div className="inline-block py-3 px-4 back-to-blogs theme bg-color-2">
                                        <Link href="/gardenia">
                                            <p className="mb-0 theme color-white very-small-font">BACK TO BLOG</p>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                    </Container>
                </section>
                <section className="beleaf">
                    <div className="beleaf-outer-section position-relative">
                        <div className="beleaf-image" style={{ 
                            backgroundImage: `url(${beleaf})`
                            }}>
                        </div>
                        <div className="position-absolute image-contents">
                            <div className="title"><p className="mb-0 font-recoleta font-weight-600 font-weight-normal gardenia-sub-title-font theme color-covid-color">you will not be-leaf what we tell you...</p></div>
                            <div className="sub-title"><p className="text-center font-weight-400 theme color-covid-color paragraph-font">Receive exclusive offers & plantastic goodies, while we bring all the dirt to you.</p></div>
                            
                            <MailchimpSubscribe
                                    url={url}
                                    render={({ subscribe, status, message }) => (
                                        <div className="submit-box d-flex justify-content-center">
                                        <SimpleForm onSubmitted={formData => subscribe(formData)} />
                                        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                                        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                                        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                                    </div>
                                    )}
                                />
                            <div className="email"><p className="text-center font-weight-400 theme color-covid-color very-small-font">Your email will never be used to spam and will always be private</p></div>
                        </div>
                    </div>
                </section>
                <section className="py-14 social-media-share position-relative theme bg-gardenia-color">
                    <div className="social-handle"><p className="mb-0 text-center theme color-color-2 font-weight-600 very-small-font">@PLANTISSERIE_GOA</p></div>
                    <div className="social-share"><p className="py-3 mb-0 text-center font-weight-600 theme color-covid-color font-recoleta gardenia-sub-title-font">share the love on Instagram</p></div>
                    <div className="social-content">
                        <Container>
                            <Row>
                                <Col sm={3}>
                                </Col>
                                <Col sm={2}>
                                    <img src={insta1} alt="" />
                                </Col>
                                <Col sm={2}>
                                    <img src={insta1} alt="" />
                                </Col>
                                <Col sm={2}>
                                    <img src={insta1} alt="" />
                                </Col>
                                <Col sm={3}>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="left-leaf position-absolute">
                        <img src={leftleaf} alt="" />
                    </div>
                    <div className="right-leaf position-absolute right-0">
                        <img src={rightleaf} alt="" />
                    </div>
                </section>
            </section>
        </Layout>
    );
}


    export async function getStaticProps(context) {

    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_URL+'/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    query SinglePost($id: ID!, $idType: PostIdType!) {
                        post(id: $id, idType: $idType) {
                            title
                            slug
                            content
                            excerpt
                            featuredImage {
                                node {
                                    sourceUrl
                                }
                            }
                            categories {
                                edges {
                                  node {
                                    name
                                  }
                                }
                            }
                            author {
                                node {
                                  name
                                }
                            }
                            date
                        }
                        subPosts: post(id: $id, idType: $idType) {
                            title
                            slug
                            content
                            excerpt
                            featuredImage {
                                node {
                                    sourceUrl
                                }
                            }
                        }
                    }
                `,
                variables: {
                    id: context.params.slug,
                    idType: 'SLUG'
                }
            })
        })
    
        const json = await res.json()
    
        return {
            props: { posts:json.data.post,
            },
        }
    }

    export async function getStaticPaths() {

        const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_URL+'/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query AllPostsQuery {
                    posts {
                        nodes {
                            slug
                        }
                    }
                }
            `})
        })
    
        const json = await res.json() 
        const posts = json.data.posts.nodes;
    
        const paths = posts.map((post) => ({
            params: { slug: post.slug },
        }))
    
        return { paths, fallback: false } 
    }
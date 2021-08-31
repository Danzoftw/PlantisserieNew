import { gql } from "@apollo/client";

const GET_MENUS = gql`query{
    headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
        edges {
            node {
                id
                label
                url
                path
            }
        }
    }
    footerMenus: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
        edges {
            node {
                id
                label
                url
                path
            }
        }
    }
    
}`;

export default GET_MENUS;
import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params:{id}}) {
    const postData = await getPostData(id);
    return {
        props: {
            postData
        }
    }
}

const Post = ({postData:{title,date,contentHtml}}) => {
    return (
        <Layout title={title}>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <Date dateString={date}/>
        </Layout>
    )
}

export default Post;
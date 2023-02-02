import { useAppContext } from "../store/store"
import Book from "./book";
import Layout from "./layout"

export default function Index(){

    const store = useAppContext();

    return <Layout>
        {store.items.map(item => 
        <Book key={item.id} item={item} />
        )}
        </Layout>
}
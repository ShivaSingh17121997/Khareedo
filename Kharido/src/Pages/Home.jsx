import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import axios from 'axios'
import Sidebar from '../Components/Sidebar';

export default function Home() {
    const [product, setProduct] = useState([]);
    const [originalData, setOriginalData] = useState([])
    const [search, setSerch] = useState("");
    const [page, setPage] = useState(1);



    useEffect(() => {
        const fetchedData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/products?_limit=24&q=${search}&_page=${page}`)
                console.log(res.data)
                setProduct(res.data)
                setOriginalData(res.data)

            } catch (error) {
                console.log("something is wrong in the fatching api")
            }
        }
        fetchedData();
    }, [search, page]);

    // handle Filter function


    const handleFilterByCategory = (category) => {
        if (category !== "") {
            let filteredData = originalData.filter((item) => item.category === category);
            setProduct(filteredData);
        } else {
            setProduct(originalData);
        }
        console.log(category, "category")
    };





    return (

        <div>
            {/* search function */}
            <input type="text" value={search} onChange={(e) => setSerch(e.target.value)} placeholder='search here anything you want' />

            <div style={{ display: 'flex', justifyContent: "space-around" }} >

                {/* sisebar */}
                <div className='side-bar' >
                    <Sidebar handleFilterByCategory={handleFilterByCategory} />
                </div>




                {/* mapping the data */}
                <div className='main-container' >

                    {
                        product.map((item) => {
                            return <div key={item.id}  >

                                < Card key={item.id} {...item} />
                            </div>
                        })
                    }




                    {/* Pagination */}
                    <div>
                        <button disabled={page === 1} onClick={() => setPage(page - 1)} >Prev</button>
                        <button>{page}</button>
                        <button disabled={page === Math.floor(product.length / 2)} onClick={() => setPage(page + 1)} >Next</button>
                    </div>
                </div>

            </div>
        </div >
    )
}

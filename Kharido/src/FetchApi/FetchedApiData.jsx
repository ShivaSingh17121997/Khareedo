// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Home from '../Pages/Home';
// import Navbar from '../Components/Navbar';
// import Search from '../Components/Search';

// export default function FetchedApiData() {
//     const [fetchProduct, setfetchProduct] = useState([]);
//     const [search, setSearch] = useState("");

//     useEffect(() => {
//         const fetchedData = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8000/products?_limit=8&q=${search}`);
//                 console.log(res.data);
//                 setfetchProduct(res.data);
//             } catch (error) {
//                 console.log("Something is wrong in fetching API");
//             }
//         };
//         fetchedData();
//     }, [search]);

//     return (
//         <div>
//             <div>
//                 <Home product={fetchProduct} />
//             </div>
//             <div>
//                 <Search search={search} setSearch={setSearch} />
//             </div>
//         </div>
//     );
// }

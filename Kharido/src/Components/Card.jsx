// Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ id, title, brand, images }) {
    return (
        <div>
            <Link to={`/singleProduct/${id}`}>
                <div style={{ border: '1px solid black', margin: "5px", padding: '5px', gap: '10px' }} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img width="150px" height="230px" className="w-full" src={images[1]} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">
                            {brand}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

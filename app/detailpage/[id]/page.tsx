"use client";

import { useParams } from "next/navigation";

const DetailPage = () => {
    const params = useParams();
    const { id } = params;

    return (
        <main style={{ padding: 20 }}>
            <h1>Detailpagina voor: {id}</h1>
            <p>Hier kun je de informatie tonen over dit specifieke huis.</p>
        </main>
    );
};

export default DetailPage;

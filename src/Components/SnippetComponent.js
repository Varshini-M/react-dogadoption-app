import React, { useState, useEffect } from 'react';


function Snippet() {
    const [snippetvar, setSnippetVar] = useState();
    const [itr, setItr] = useState(0);
    const jsonListFunction = async () => {
        let response = await fetch('http://localhost:8400/v1/getJson');
        const responseJson = await response.clone().json();
        responseJson!==undefined?setSnippetVar(responseJson):setSnippetVar('');
    };
    useEffect(() => {
        if (snippetvar === undefined) {
            jsonListFunction();
        }
        let res = setInterval(() => {
            if (itr + 1 < snippetvar.length) {
                setItr(itr + 1);
            } else {
                setItr(0);
            }
        }, 10000);
        return () => { clearInterval(res) };
    });
    const ValidateSnippet = () => {
        if (snippetvar !== undefined) {
            return <p><i>{snippetvar[itr]['story']}</i></p>;
        } else {
            return <React.Fragment />
        }
    };
    return (
        <React.Fragment>
            <ValidateSnippet />
        </React.Fragment>
    );
}

export default Snippet;
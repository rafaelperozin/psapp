import React, { FC, useState, useEffect } from 'react';

import { Templates } from '../interfaces/Templates';

interface Props {
    data: Templates
}

const Template: FC<Props> = ({ data }) => {

    const [template, setTemplate] = useState<Templates>();

    useEffect(() => {
        setTemplate(data);
    }, []);

    function handleModal(body: string) {
        console.log(body)
    }
    
    return (
        <tr key={template?.id} className="templates__item">
            <td className="templates__td">{template?.title}</td>
            <td className="templates__td">{template?.author.name}</td>
            <td className="templates__td">{template?.created}</td>
            <td className="templates__td">{template?.modified}</td>
            <td className="templates__td">
                <a href="#" 
                    onClick={() => handleModal('edit', template)}
                    className="templates__action templates__action--edit">
                    Edit</a>
                </td>
            <td className="templates__td">
                <a href="#" 
                    onClick={() => handleModal('preview')}
                    className="templates__action templates__action--preview">
                    Preview</a>
                </td>
            <td className="templates__td">
                <a href="#" 
                    onClick={() => handleModal('print')}
                    className="templates__action templates__action--print">
                    Print Document</a>
                </td>
        </tr>
    );
};

export default Template;
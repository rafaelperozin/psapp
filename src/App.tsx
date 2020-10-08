import React, { FC, useState, useEffect } from 'react';

import api from './services/api';
import { Templates } from './interfaces/Templates';
import Template from './components/Template';

const App: FC = () => {

  const [templates, setTemplates] = useState<[Templates]>();

  const loadData = async () => {
    const response = await api.get('/templates');
    setTemplates(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <table className="templates">
        <thead className="templates__header">
          <tr className="templates__row">
            <th className="templates__th">Title</th>
            <th className="templates__th">Author</th>
            <th className="templates__th">Created</th>
            <th className="templates__th">Last Modified</th>
            <th className="templates__th" colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody className="templates__body">
          {templates?.map((template: Templates) => 
            <Template data={template} />
          )}
        </tbody>
        <tfoot className="templates__footer">
          <tr className="templates__row">
            <td className="templates__th" colSpan={7}>Total of templates: {templates?.length}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default App;
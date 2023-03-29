import { fetchUtils } from 'ra-core';
import { stringify } from 'query-string';


const apiUrl = 'https://se-diva-docs.herokuapp.com';

/*const httpClient = (url: any, options: fetchUtils.Options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};*/

const dataProvider = {
  getList: (resource: any, params: any) =>
    fetchUtils.fetchJson(`${apiUrl}/${resource}?${stringify(params)}`).then(({ json }) => ({
      data: json,
      total: parseInt(json.length, 10),
    })),
  getOne: (resource: any, { id }: any) =>
    fetchUtils.fetchJson(`${apiUrl}/${resource}/${id}`).then(({ json }) => ({
      data: json,
    })),
  getMany: (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return fetchUtils.fetchJson(`${apiUrl}/${resource}?${stringify(query)}`).then(({ json }) => ({
      data: json,
    }));
  },
  getManyReference: (resource: any, params: any) => {
    const query = {
      ...params.filter,
      [params.target]: params.id,
    };
    return fetchUtils.fetchJson(`${apiUrl}/${resource}?${stringify(query)}`).then(({ json }) => ({
      data: json,
      total: json.length,
    }));
  },
  create: (resource: any, { data }: any) =>
    fetchUtils.fetchJson(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(({ json }) => ({
      data: { ...data, id: json.id },
    })),
  update: (resource: any, { id, data }: any) =>
    fetchUtils.fetchJson(`${apiUrl}/${resource}/${id}`, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(({ json }) => ({
      data: json,
    })),
  updateMany: (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return fetchUtils.fetchJson(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: json,
    }));
  },
  delete: (resource: any, { id }: any) =>
    fetchUtils.fetchJson(`${apiUrl}/${resource}/${id}`, {
      method: 'DELETE',
    }).then(({ json }) => ({
      data: json,
    })),
  deleteMany: (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return fetchUtils.fetchJson(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'DELETE',
    }).then(({ json }) => ({
      data: json,
    }));
  },
};

export default dataProvider
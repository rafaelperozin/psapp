export interface Author {
    id: number,
    name: string
  }
  
export interface Documents {
    id: number,
    body: string,
    author: Author,
    created: string
}
  
export interface Templates {
    id: number,
    title: string,
    author: Author,
    body: string,
    created: string,
    modified: string,
    documents: Documents[],
}
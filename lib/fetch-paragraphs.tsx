import {DrupalParagraph, getResource} from "next-drupal";

export async function fetchParagraphs(components: DrupalParagraph[]) {
  const requests = [];
  components.map(component => {
    requests.push(getResource<DrupalParagraph>(
      component.type,
      component.id
    ))
  })
  return await Promise.all(requests)
}

export function fetchRowParagraphs(rows: DrupalParagraph[], componentField: string) {
  const requests = [];
  rows.map(row => {
    row[componentField].map(component => {
      requests.push(component)
    })
  })
  return fetchParagraphs(requests);
}

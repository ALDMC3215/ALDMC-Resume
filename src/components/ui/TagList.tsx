export function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="job__tags d-flex flex-wrap gap-2">
      {tags.map(tag => <li key={tag} className="chip lt d-inline-flex align-items-center">{tag}</li>)}
    </ul>
  );
}

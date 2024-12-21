export default function SearchResult({ data, error }) {
  console.log("Client-Side Data:", data);
  console.log("Client-Side Error:", error);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="dark:bg-dark dark:text-white">Search Results</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = context.query;

  console.log("Server-Side Query Parameters:", query);

  try {
    const queryString = new URLSearchParams(query).toString();
    console.log("Server-Side Query String:", queryString);

    const res = await fetch(`http://localhost:5000/bteb?${queryString}`);
    console.log("Server-Side Response Status:", res.status);

    if (!res.ok) {
      throw new Error(`API Error: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("Server-Side Fetched Data:", data);

    return { props: { data } };
  } catch (error) {
    console.error("Server-Side Error:", error.message);
    return { props: { error: error.message } };
  }
}
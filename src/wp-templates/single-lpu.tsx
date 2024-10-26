import { gql } from '@apollo/client';
import { FaustTemplate } from "@faustwp/core";

interface Lpu {
  title: string;
  content: string;
  date: string;
}

interface GetLpuSinglePageQuery {
  lpu: Lpu;
}

const SingleLpu: FaustTemplate<GetLpuSinglePageQuery> = (props) => {
  if (props.loading) {
    return <div>Loading...</div>;
  }

  const { lpu } = props.data;

  return (
    <div>
      <h1>{lpu.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: lpu.content }} />
      <p>Published on: {new Date(lpu.date).toLocaleDateString()}</p>
    </div>
  );
};

SingleLpu.query = gql`
  query GetLpuSinglePage($id: ID!, $idType: LpuIdType!) {
    lpu(id: $id, idType: $idType) {
      title
      content
      date
    }
  }
`;

SingleLpu.variables = ({ databaseId }, ctx) => {
  return { 
    id: databaseId,
    idType: 'DATABASE_ID'
  };
};

export default SingleLpu;
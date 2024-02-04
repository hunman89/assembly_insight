interface AssemblyMember {
  DAESU: string;
  DAE: string;
  DAE_NM: string;
  NAME: string;
  NAME_HAN: string;
  JA?: string;
  HO?: string;
  BIRTH: string;
  BON?: string;
  POSI?: string;
  HAK: string;
  HOBBY?: string;
  BOOK?: string;
  SANG?: string;
  DEAD?: string;
  URL: string;
}

interface AssemblyData {
  row: AssemblyMember[];
}

interface GetMembersResult {
  nprlapfmaufmqytet: AssemblyData[];
}

const apiKey = process.env.ASSEMBLY_API_KEY;
const resultType = "json";
const generation = 21;
const assembly_api_baseurl = "https://open.assembly.go.kr/portal/openapi/";
const assembly_members_endpoint = "nprlapfmaufmqytet";

export const getMembers = async (): Promise<GetMembersResult> => {
  const res = await fetch(
    assembly_api_baseurl +
      assembly_members_endpoint +
      "?KEY=" +
      apiKey +
      "&Type=" +
      resultType +
      "&DAESU=" +
      generation
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

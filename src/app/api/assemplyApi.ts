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

interface Bill {
  BILL_ID: string;
  BILL_NO: string;
  BILL_NAME: string;
  COMMITTEE?: string;
  PROPOSE_DT: string;
  PROC_RESULT?: string;
  AGE: string;
  DETAIL_LINK: string;
  PROPOSER: string;
  MEMBER_LIST: string;
  LAW_PROC_DT?: string;
  LAW_PRESENT_DT?: string;
  LAW_SUBMIT_DT?: string;
  CMT_PROC_RESULT_CD?: string;
  CMT_PROC_DT?: string;
  CMT_PRESENT_DT?: string;
  COMMITTEE_DT?: string;
  PROC_DT?: string;
  COMMITTEE_ID?: string;
  PUBL_PROPOSER: string;
  LAW_PROC_RESULT_CD?: string;
  RST_PROPOSER: string;
}

interface Result {
  CODE: string;
  MESSAGE: string;
}

interface Head {
  list_total_count: number;
  RESULT: Result;
}

interface BillData {
  head: Head;
  row: Bill[];
}

interface GetBillsResult {
  nzmimeepazxkubdpn: BillData[];
}

const apiKey = process.env.ASSEMBLY_API_KEY;
const resultType = "json";
const generation = 21;
const assembly_api_baseurl = "https://open.assembly.go.kr/portal/openapi/";
const assembly_members_endpoint = "nprlapfmaufmqytet";
const search_bills_endpoint = "nzmimeepazxkubdpn";

export const getMembers = async (): Promise<GetMembersResult> => {
  const res = await fetch(
    assembly_api_baseurl +
      assembly_members_endpoint +
      "?KEY=" +
      apiKey +
      "&Type=" +
      resultType +
      "&DAESU=" +
      generation +
      "&pSize=" +
      "350"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getMember = async (name: string): Promise<GetMembersResult> => {
  const res = await fetch(
    assembly_api_baseurl +
      assembly_members_endpoint +
      "?KEY=" +
      apiKey +
      "&Type=" +
      resultType +
      "&DAESU=" +
      generation +
      "&NAME=" +
      name
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const searchBills = async (name: string): Promise<GetBillsResult> => {
  const res = await fetch(
    assembly_api_baseurl +
      search_bills_endpoint +
      "?KEY=" +
      apiKey +
      "&Type=" +
      resultType +
      "&AGE=" +
      generation +
      "&PROPOSER=" +
      name +
      "&pSize=" +
      "350"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

import { getMembers, searchBills } from "./api/assemplyApi";

export default async function Home() {
  const data = await getMembers();
  const members = data.nprlapfmaufmqytet[1].row;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div>국회의원 법률 발의 정보</div>
      <ul>
        {members.map((member, i) => (
          <li className="flex gap-2" key={i}>
            <div>{i + 1}</div>
            <div>{member.NAME}</div>
            <Billlists name={member.NAME} />
          </li>
        ))}
      </ul>
    </main>
  );
}

async function Billlists({ name }: { name: string }) {
  const data = await searchBills(name);
  const bills = data.nzmimeepazxkubdpn[1].row;
  return (
    <>
      <div>{bills.length}</div>
      {/* <ul>
        {bills.map((b, i) => (
          <li key={i}>{b.PROPOSE_DT}</li>
        ))}
      </ul> */}
    </>
  );
}

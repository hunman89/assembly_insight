import { getMembers } from "./api/assemplyApi";

export default async function Home() {
  const data = await getMembers();
  const members = data.nprlapfmaufmqytet[1].row;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>국회의원 정보</div>
      <ul>
        {members.map((member, i) => (
          <li key={i}>{member.NAME}</li>
        ))}
      </ul>
    </main>
  );
}

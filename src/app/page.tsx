import { getMembers, searchBills } from "./api/assemplyApi";

export default async function Home() {
  const data = await getMembers();
  const members = data.nprlapfmaufmqytet[1].row;

  // Get bill counts for each member
  const membersWithBillCounts = await Promise.all(
    members.map(async (member) => {
      const billData = await searchBills(member.NAME);
      const bills = billData.nzmimeepazxkubdpn[1].row;
      return { ...member, bills };
    })
  );

  const sortedMembers = membersWithBillCounts.sort(
    (a, b) => b.bills.length - a.bills.length
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div>국회의원 법률 발의 정보</div>
      <ul className="w-full max-w-4xl space-y-4">
        {sortedMembers.map((member, i) => (
          <li
            className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            key={i}
          >
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">
              {i + 1}
            </div>
            <div className="ml-4 text-lg font-medium text-gray-800">
              {member.NAME}
            </div>
            <div className="ml-auto">
              <BillList bills={member.bills} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

type BillListProps = {
  bills: any[];
};

function BillList({ bills }: BillListProps) {
  return <div>{bills.length}</div>;
}

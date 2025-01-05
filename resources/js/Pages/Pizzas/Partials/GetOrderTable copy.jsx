
const GetOrderTable = ({responseOrderList}) => {
    return (
        <div className="p-4 bg-white border-b border-gray-200 dark:border-b-0 dark:bg-gray-900">
            <div className="flex flex-col mt-5">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden border rounded-lg dark:border-gray-700">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-900/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Authorizer
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Place
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Check In
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Per Hour Rate
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Total Time
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Amount
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
                                    {responseOrderList?.data.length > 0 ? (
                                        responseOrderList.data.map((attendance, index) => (
                                            <tr key={attendance.id}>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {attendance.authorizeAdmin}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {attendance.location}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {formatDate(attendance.check_in_date)}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {attendance.amount_rate}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {attendance.total_hours}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {attendance.total_amount} TK
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="py-4 text-sm text-center text-gray-500 dark:text-gray-200"
                                            >
                                                No users found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Pagination
                className="mt-6"
                links={responseOrderList?.links}
                total={responseOrderList?.total}
            /> */}
        </div>
    );
};

export default GetOrderTable;
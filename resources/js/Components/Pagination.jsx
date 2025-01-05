import { Link } from '@inertiajs/react'; // Adjust the import if needed

const Pagination = ({ links, total }) => {
    return (
        <>
            {links.length > 3 && (
                <div>
                    <div className="flex flex-wrap gap-1 mt-5">
                        {links.map((link, key) => (
                            link.url === null ? (
                                <div
                                    key={key}
                                    className="px-4 py-3 mb-1 mr-1 text-sm leading-4 text-gray-400 border rounded dark:border-gray-400 dark:text-white"
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ) : (
                                <Link
                                    key={`link-${key}`}
                                    href={link.url}
                                    className={`px-4 py-3 mb-1 mr-1 text-sm leading-4 transition duration-200 ease-in border rounded dark:border-gray-400 focus:text-indigo-500 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:ring-2 focus:ring-offset-2 dark:text-white ${link.active ? 'bg-indigo-500 text-white' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            )
                        ))}
                    </div>
                    <div className="text-sm dark:text-white">
                        {total && <span>Total post: </span>} {total}
                    </div>
                </div>
            )}
        </>
    );
};

export default Pagination;

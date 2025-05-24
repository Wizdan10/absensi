import { Button } from "@headlessui/react";
import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <div className="flex mt-8 space-x-2">
            {links.map((link, index) => 
                link.url ? (
                    <Link
                        key={index}
                        href={link.url}
                        className={`px-4 py-2 border rounded-lg ${
                            link.active
                                ? "bg-blue-500 text-white"
                                : "text-primary hover:bg-indigo-600 hover:text-white border border-rouded-lg"
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <Button
                        key={index}
                        className="px-4 py-2 border rounded-lg bg-gray-200 text-gray-400"
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        disabled={true}
                    />
                )
            )}
        </div>
    )
   
}

import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link} from '@inertiajs/react';

export default function UserIndex({ auth, users }) {
    console.log(users);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='flex justify-between items-center'>
                        <div className='rounded py-2 px-4 bg-blue-100 mb-2'>
                            <label className='font-bold'>Total Data User : {users.total}</label>
                        </div>
                            <Link href={route('users.create')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold
                                py-2 px-4 rounded mb-2'>Create User</Link>          
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            
                            <table className='min-w-full '>
                                <thead>
                                    <tr className='border-b-2'>
                                        <th className='px-6 py-3 text-left text-lg font-medium text-black'>No</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium text-black'>Name</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium text-black'>Email</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium text-black'>Role</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {users.data.map(({id, name, email, role}) => (
                                        <tr key={id} className='border-b'>
                                            <td className='px-6 py-4 whitespace-nowrap'>
                                            {id}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>
                                            {name}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>
                                            {email}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>
                                            {role}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                            </table>
                            <Pagination links={users.links}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

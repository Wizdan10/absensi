import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head} from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm } from '@inertiajs/react';

export default function UserIndex({ auth, users }) {
    
        const { data, setData, patch, errors, processing, recentlySuccessful } = useForm();
    
        const submit = (e) => {
            e.preventDefault();
    
            patch(route('profile.update'));
        };
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
                    <section className="max-w-xl">
                                <header>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Create User
                                    </h2>
                    
                                    <p className="mt-1 text-sm text-gray-600">
                                        Create a new user
                                    </p>
                                </header>
                    
                                <form onSubmit={submit} className="mt-6 space-y-6">
                                    <div>
                                        <InputLabel htmlFor="name" value="Name" />
                    
                                        <TextInput
                                            id="name"
                                            className="mt-1 block w-full"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                            isFocused
                                            autoComplete="name"
                                        />
                    
                                        <InputError className="mt-2" message={errors.name} />
                                    </div>
                    
                                    <div>
                                        <InputLabel htmlFor="email" value="Email" />
                    
                                        <TextInput
                                            id="email"
                                            type="email"
                                            className="mt-1 block w-full"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            autoComplete="username"
                                        />
                    
                                        <InputError className="mt-2" message={errors.email} />
                                    </div>
                    
                                    <div className="flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>Save</PrimaryButton>
                    
                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-gray-600">
                                                Saved.
                                            </p>
                                        </Transition>
                                    </div>
                                </form>
                            </section>
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

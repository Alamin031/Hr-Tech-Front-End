import Head from 'next/head'
import AdminNavbar from '../../Layout/AdminNavbar'


export default function adminDashbord() {
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"  rel="stylesheet" />

    return (
        <div>
            <AdminNavbar/>
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <Head>
                        <title>Admin Dashbord</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                        <h1 className="text-6xl font-bold">
                            Welcome to Admin Dashbord
                        </h1>
                    </main>
                    </div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>

        </div>
    )
}

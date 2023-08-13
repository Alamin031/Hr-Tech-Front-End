import Head from 'next/head'
import Layout from '../../Layout/layout'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import React, { useState } from 'react'
// import axios from 'axios'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { adminLoginSchema } from '../../Component/Validation/Validation'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { useCookies } from 'react-cookie'
// import { useEffect } from 'react'
// import { useAuth } from '../../Context/UserContext'
// import { useAdminAuth } from '../../Context/AdminContext'
// import { useUserAuth } from '../../Context/UserContext'
// import { useAdminLogin } from '../../Context/AdminLoginContext'
// import { useUserLogin } from '../../Context/UserLoginContext'
// import { useAdminRegister } from '../../Context/AdminRegisterContext'
// import { useUserRegister } from '../../Context/UserRegisterContext'

export default function adminDashbord() {
    return (
        <div>
            <Layout>
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <Head>
                        <title>Admin Dashbord</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <a href="/Component/admin/showCustomer" className="hover:text-gray-300 font-bold">showallcustomer</a>

                    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                        <h1 className="text-6xl font-bold">
                            Welcome to Admin Dashbord
                        </h1>

                        <p className="mt-3 text-2xl">
                            Get started by editing{' '}
                            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                                pages/index.js
                            </code>
                        </p>

                        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                            <a
                                href="https://nextjs.org/docs"
                                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                            >
                                <h3 className="text-2xl font-bold">
                                    Documentation &rarr;
                                </h3>
                                <p className="mt-4 text-xl">
                                    Find in-depth information about Next.js features and API.
                                </p>
                            </a>

                            <a
                                href="https://nextjs.org/learn"
                                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                            >
                                <h3 className="text-2xl font-bold">
                                    Learn &rarr;
                                </h3>
                                <p className="mt-4 text-xl">
                                    Learn about Next.js in an interactive course with quizzes!
                                </p>
                            </a>

                            <a
                                href="/Component/UserDashbord"
                                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                            >
                                <h3 className="text-2xl font-bold">
                                    Examples &rarr;
                                </h3>
                                <p className="mt-4 text-xl">
                                    Discover and deploy boilerplate example Next.js projects.
                                </p>
                            </a>
                            
                            <a
                                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                            >
                                <h3 className="text-2xl font-bold">
                                    Deploy &rarr;
                                </h3>
                                <p className="mt-4 text-xl">
                                    Instantly deploy your Next.js site to a public URL with Vercel.
                                </p>
                            </a>
                        </div>
                    </main>
                    </div>
            </Layout>
        </div>
    )
}

import { NextPage } from "next";
import { MainLayout } from "../components/layouts/MainLayout";

const AboutPage: NextPage = () => {
    return (
        <MainLayout>
            <h1 className="text-3xl font-bold">About Page</h1>
        </MainLayout>
    );
};

export default AboutPage;

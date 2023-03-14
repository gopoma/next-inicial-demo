import { NextPageWithLayout } from "./_app";

import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

const HomePage: NextPageWithLayout = () => {
    return (
        <h1 className="text-3xl font-bold">Home Page</h1>
    );
};

HomePage.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    );
}

export default HomePage;

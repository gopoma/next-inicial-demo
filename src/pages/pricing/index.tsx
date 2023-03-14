import { MainLayout } from "../../components/layouts/MainLayout";
import { NextPageWithLayout } from "../_app";

const PricingPage: NextPageWithLayout = () => {
    return (
        <h1 className="text-3xl font-bold">Pricing Page</h1>
    );
};

PricingPage.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            { page }
        </MainLayout>
    );
}

export default PricingPage;

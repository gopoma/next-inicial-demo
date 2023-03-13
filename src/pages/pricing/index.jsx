import { MainLayout } from "@/components/layouts/MainLayout";

export default function PricingPage() {
    return (
        <h1 className="text-3xl font-bold">Pricing Page</h1>
    );
}

PricingPage.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            { page }
        </MainLayout>
    );
}

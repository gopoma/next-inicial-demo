import { DarkLayout } from "@/components/layouts/DarkLayout";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function HomePage() {
    return (
        <h1 className="text-3xl font-bold">Home Page</h1>
    );
}

HomePage.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    );
}

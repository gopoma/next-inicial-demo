import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";
import { NextPageWithLayout } from '../_app';

const ContactPage: NextPageWithLayout = () => {
    return (
        <h1 className="text-3xl font-bold">Contact Page</h1>
    );
};

ContactPage.getLayout = function(page) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    );
}

export default ContactPage;

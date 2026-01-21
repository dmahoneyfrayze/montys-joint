import React, { useEffect } from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout/Layout';
import { Gift } from 'lucide-react';

const BirthdayClub = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://go.montysjoint.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Layout>
            <SEO
                title="Birthday Club"
                description="Join the Monty’s Joint Birthday Club! Sign up for exclusive treats and gifts on your special day."
                url="https://montysjoint.com/birthday-club/"
                image="https://montysjoint.com/assets/logo-main.png"
            />
            <div style={{ paddingTop: '150px', paddingBottom: '8rem', textAlign: 'center' }} className="container">
                <Gift size={64} color="var(--color-yellow)" style={{ marginBottom: '2rem' }} />
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-yellow)' }}>Birthday Club</h1>
                <p style={{ color: '#ccc', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                    Join our Birthday Club and get exclusive treats on your special day! Plus, be the first to know about upcoming events and special offers.
                </p>

                <div style={{ maxWidth: '800px', margin: '0 auto', background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                    <iframe
                        src="https://go.montysjoint.com/widget/form/gVkypCXZCQYZgDEQse0T"
                        style={{ width: '100%', height: '1038px', border: 'none' }}
                        id="inline-gVkypCXZCQYZgDEQse0T"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Birthday Club"
                        data-height="1038"
                        data-layout-iframe-id="inline-gVkypCXZCQYZgDEQse0T"
                        data-form-id="gVkypCXZCQYZgDEQse0T"
                        title="Birthday Club"
                    >
                    </iframe>
                </div>
            </div>
        </Layout>
    );
};

export default BirthdayClub;

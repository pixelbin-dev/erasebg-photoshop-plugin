import React, { useEffect, useState } from "react";
import { shell } from "uxp";

import { abbreviateNumber, getUsage } from "../utils";

export function CreditsInformation({ appOrgDetails, token }) {
    const [usage, setUsage] = useState({});

    useEffect(() => {
        getUsage(token).then((data) => setUsage(data));
    }, [token]);

    const handleBuyCreditsButtonClick = async () => {
        await shell.openExternal(
            `https://console.pixelbin.io/organization/${appOrgDetails.app.orgId}/settings/billing/pricing`
        );
    };

    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "var(--uxp-host-text-color)",
                    fontSize: "var(--uxp-host-font-size-larger)",
                    marginBottom: "1rem",
                }}
            >
                <span>Credits</span>{" "}
                <span style={{ marginLeft: "auto" }}>
                    {abbreviateNumber(usage.credits?.used)}/
                    {abbreviateNumber(usage.total?.credits)} used
                </span>
            </div>
            <sp-button
                style={{ width: "100%" }}
                variant="primary"
                onClick={handleBuyCreditsButtonClick}
            >
                Buy more credits
            </sp-button>
        </>
    );
}

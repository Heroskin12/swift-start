const dummyData = [
  {
    brid: "a01824433",
    name: "Ayush Goyal",
    tc: 33,
    businessUnit: "Business Unit 1",
    teamName: "Team Alpha",
    role: "Software Engineer",
    adGroupList: [
      {
        adGroupName: "Ad Group 1",
        requestStatus: false,
        requestFor: "ar56789",
        attestation: "no",
        entitlementData: "databricks",
        businessJustification: "Need access for project X",
      },
      {
        adGroupName: "Ad Group 2",
        requestStatus: true,
        requestFor: "ar12345",
        attestation: "yes",
        entitlementData: "jira",
        businessJustification: "Required for ticket management",
      },
      {
        adGroupName: "Ad Group 3",
        requestStatus: false,
        requestFor: "ar98765",
        attestation: "no",
        entitlementData: "slack",
        businessJustification: "Team communication",
      },
      {
        adGroupName: "Ad Group 4",
        requestStatus: true,
        requestFor: "ar54321",
        attestation: "yes",
        entitlementData: "github",
        businessJustification: "Code repository access",
      },
    ],
    applicationName: [
      {
        appName: "PyCharm",
        requestStatus: true,
      },
      {
        appName: "VS Code",
        requestStatus: true,
      },
      {
        appName: "Slack",
        requestStatus: false,
      },
      {
        appName: "Jira",
        requestStatus: true,
      },
      {
        appName: "Figma",
        requestStatus: false,
      },
    ],
  },
  {
    brid: "a01234567",
    name: "Alice DeVaughan",
    tc: 12,
    businessUnit: "Business Unit 2",
    teamName: "Team Beta",
    role: "QA Engineer",
    adGroupList: [
      {
        adGroupName: "fBarcBto",
        requestStatus: false,
        requestFor: "ar22222",
        attestation: "no",
        entitlementData: "figma",
        businessJustification: "UI/UX design access",
      },
      {
        adGroupName: "xQwertyu",
        requestStatus: "rejected",
        requestFor: "ar33333",
        attestation: "no",
        entitlementData: "testrail",
        businessJustification: "Testing and QA",
      },
      {
        adGroupName: "nLopAsdf",
        requestStatus: true,
        requestFor: "ar44444",
        attestation: "yes",
        entitlementData: "jira",
        businessJustification: "Ticket management",
      },
    ],
    applicationName: [
      {
        appName: "Figma",
        requestStatus: false,
      },
      {
        appName: "TestRail",
        requestStatus: "rejected",
      },
      {
        appName: "Jira",
        requestStatus: true,
      },
    ],
  },
  {
    brid: "a09876543",
    name: "Bobbie Bobertson",
    tc: 21,
    businessUnit: "Business Unit 3",
    teamName: "Team Gamma",
    role: "Support Specialist",
    adGroupList: [
      {
        adGroupName: "zXcvBnmq",
        requestStatus: true,
        requestFor: "ar55555",
        attestation: "yes",
        entitlementData: "databricks",
        businessJustification: "Data analysis",
      },
      {
        adGroupName: "mAsDfGhj",
        requestStatus: false,
        requestFor: "ar66666",
        attestation: "no",
        entitlementData: "zendesk",
        businessJustification: "Customer support",
      },
      {
        adGroupName: "pOiUyTre",
        requestStatus: "rejected",
        requestFor: "ar77777",
        attestation: "no",
        entitlementData: "slack",
        businessJustification: "Team chat",
      },
    ],
    applicationName: [
      {
        appName: "Databricks",
        requestStatus: true,
      },
      {
        appName: "Zendesk",
        requestStatus: false,
      },
      {
        appName: "Slack",
        requestStatus: "rejected",
      },
    ],
  },
];

export default dummyData;

'use client';
import React, { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { royalColors, royalTypography, spacing, borderRadius, shadows, gradients } from '@/lib/royalDesign';

const pageContent = {
  en: {
    title: 'UN Sustainable Development Goals',
    heroTitle: 'JHCO\'s Alignment with UN Sustainable Development Goals',
    heroSubtitle: 'Supporting all 17 SDGs through integrated humanitarian programs and strategic partnerships',

    sdgDefinition: {
      title: 'About the SDGs',
      description: 'The United Nations Sustainable Development Goals (SDGs) are a universal call to action to end poverty, protect the planet, and ensure peace and prosperity by 2030. JHCO integrates these 17 interconnected goals across all its humanitarian initiatives.',
    },

    sdgs: [
      {
        id: 1,
        number: '1',
        title: 'No Poverty',
        icon: '💰',
        color: '#e5243b',
        description: 'Eradicating poverty in all its forms everywhere.',
        jhcoAlignment: 'Emergency cash assistance, livelihood training, and microfinance programs',
        targets: [
          'Ensure equal rights to economic resources',
          'Build resilience of the poor and vulnerable',
          'Implement protection systems for all',
          'Guarantee equal rights to land and property',
        ],
        programs: [
          'Emergency Cash Assistance Program',
          'Microfinance & Business Training',
          'Livelihood Development Initiative',
          'Social Protection Programs',
        ],
        metrics: {
          description: 'Key performance indicators for poverty reduction',
          indicators: [
            { metric: 'Households lifted out of poverty', value: '15,000+', period: 'Annual' },
            { metric: 'Average income increase', value: '45%', period: 'Post-program' },
            { metric: 'Asset accumulation', value: '35%', period: 'Annual' },
            { metric: 'Economic resilience score', value: '72/100', period: 'Quarterly' },
          ],
        },
        partners: [
          'World Bank',
          'UNDP',
          'Islamic Development Bank',
          'National Microfinance Institutions',
        ],
      },
      {
        id: 2,
        number: '2',
        title: 'Zero Hunger',
        icon: '🍽️',
        color: '#dda63b',
        description: 'Ending hunger, achieving food security and improved nutrition.',
        jhcoAlignment: 'Food distribution, nutrition programs, and agricultural development',
        targets: [
          'End all forms of hunger',
          'Achieve food security and improved nutrition',
          'Double agricultural productivity of small farmers',
          'Ensure sustainable agricultural practices',
        ],
        programs: [
          'Emergency Food Assistance',
          'School Feeding Programs',
          'Community Nutrition Centers',
          'Agricultural Training & Seeds Program',
          'Household Kitchen Gardens Initiative',
        ],
        metrics: {
          description: 'Nutrition and food security outcomes',
          indicators: [
            { metric: 'People provided food assistance', value: '50,000+', period: 'Annual' },
            { metric: 'Malnutrition reduction (children under 5)', value: '38%', period: 'Annual' },
            { metric: 'School children fed daily', value: '25,000+', period: 'Annual' },
            { metric: 'Household diet diversity score', value: '5.8/9', period: 'Semi-annual' },
          ],
        },
        partners: [
          'WFP',
          'FAO',
          'UNEP',
          'Local Agricultural Ministries',
          'Nutrition NGOs',
        ],
      },
      {
        id: 3,
        number: '3',
        title: 'Good Health & Well-Being',
        icon: '🏥',
        color: '#4c9f38',
        description: 'Ensuring healthy lives and promoting well-being for all at all ages.',
        jhcoAlignment: 'Mobile health clinics, disease prevention, maternal health programs',
        targets: [
          'Reduce maternal mortality ratio',
          'End preventable deaths of newborns',
          'Combat AIDS, tuberculosis, malaria',
          'Reduce deaths from pollution and hazardous chemicals',
          'Achieve universal health coverage',
        ],
        programs: [
          'Mobile Health Clinics',
          'Maternal & Child Health Program',
          'Disease Prevention & Vaccination',
          'Mental Health Support Services',
          'WASH & Sanitation Programs',
        ],
        metrics: {
          description: 'Health and well-being indicators',
          indicators: [
            { metric: 'Medical consultations provided', value: '100,000+', period: 'Annual' },
            { metric: 'Maternal health coverage', value: '92%', period: 'Annual' },
            { metric: 'Child vaccination rate', value: '89%', period: 'Annual' },
            { metric: 'Patients with improved health status', value: '84%', period: 'Post-treatment' },
          ],
        },
        partners: [
          'WHO',
          'UNICEF',
          'MSF',
          'National Health Ministries',
          'Medical NGOs',
        ],
      },
      {
        id: 4,
        number: '4',
        title: 'Quality Education',
        icon: '📚',
        color: '#c6192b',
        description: 'Ensuring inclusive and equitable quality education for all.',
        jhcoAlignment: 'School support, teacher training, literacy programs',
        targets: [
          'Free primary and secondary education',
          'Equal access to quality pre-primary education',
          'Affordable quality higher education',
          'Eliminate gender disparities in education',
          'Build inclusive and safe schools',
        ],
        programs: [
          'School Infrastructure & Rehabilitation',
          'Teacher Training & Development',
          'Adult Literacy Programs',
          'Scholarship & School Supply Programs',
          'Early Childhood Development Centers',
        ],
        metrics: {
          description: 'Education access and quality outcomes',
          indicators: [
            { metric: 'Students reached with support', value: '25,000+', period: 'Annual' },
            { metric: 'School enrollment rate', value: '87%', period: 'Annual' },
            { metric: 'Student retention rate', value: '85%', period: 'Annual' },
            { metric: 'Literacy rate improvement', value: '42%', period: 'Semi-annual' },
          ],
        },
        partners: [
          'UNESCO',
          'UNICEF',
          'Global Partnership for Education',
          'National Education Ministries',
        ],
      },
      {
        id: 5,
        number: '5',
        title: 'Gender Equality',
        icon: '♀️',
        color: '#ff3a21',
        description: 'Achieving gender equality and empowering all women and girls.',
        jhcoAlignment: 'Women empowerment, girls education, reproductive health',
        targets: [
          'End discrimination and violence against women',
          'Ensure full participation in leadership',
          'Universal sexual and reproductive health rights',
          'Ensure equal property and inheritance rights',
          'Achieve universal school enrollment',
        ],
        programs: [
          'Women Economic Empowerment Program',
          'Girls Education Initiative',
          'Women Leadership Training',
          'Gender-Based Violence Prevention',
          'Reproductive Health Services',
        ],
        metrics: {
          description: 'Gender equality and women empowerment outcomes',
          indicators: [
            { metric: 'Women in economic programs', value: '12,000+', period: 'Annual' },
            { metric: 'Girls with education support', value: '8,500+', period: 'Annual' },
            { metric: 'Women reporting increased empowerment', value: '91%', period: 'Post-program' },
            { metric: 'Women in leadership positions', value: '48%', period: 'Annual' },
          ],
        },
        partners: [
          'UN Women',
          'UNICEF',
          'Equality Fund',
          'Women-led NGOs',
        ],
      },
      {
        id: 6,
        number: '6',
        title: 'Clean Water & Sanitation',
        icon: '💧',
        color: '#26bde2',
        description: 'Ensuring availability and sustainable management of water and sanitation.',
        jhcoAlignment: 'Water well construction, sanitation facilities, hygiene education',
        targets: [
          'Achieve universal access to safe drinking water',
          'Adequate sanitation and hygiene for all',
          'End open defecation',
          'Improve water quality and reduce pollution',
          'Protect and restore water-related ecosystems',
        ],
        programs: [
          'Water Well Construction & Maintenance',
          'Sanitation Facility Installation',
          'Hygiene Education Program',
          'Rainwater Harvesting Systems',
          'Wastewater Management Initiative',
        ],
        metrics: {
          description: 'Water access and sanitation indicators',
          indicators: [
            { metric: 'People with improved water access', value: '35,000+', period: 'Annual' },
            { metric: 'Communities with sanitation facilities', value: '180+', period: 'Annual' },
            { metric: 'Open defecation elimination rate', value: '96%', period: 'Annual' },
            { metric: 'Water quality compliance', value: '94%', period: 'Quarterly' },
          ],
        },
        partners: [
          'WHO/UNICEF JMP',
          'World Bank',
          'UNDP',
          'Water & Sanitation NGOs',
        ],
      },
      {
        id: 7,
        number: '7',
        title: 'Affordable & Clean Energy',
        icon: '⚡',
        color: '#fccc0a',
        description: 'Ensuring access to modern energy services for all.',
        jhcoAlignment: 'Solar energy projects, efficient cooking stoves, energy training',
        targets: [
          'Ensure universal access to electricity',
          'Increase renewable energy share',
          'Double the global improvement of energy efficiency',
          'Enhance international cooperation on clean energy',
        ],
        programs: [
          'Solar Energy Installation Program',
          'Energy Efficient Stove Distribution',
          'Renewable Energy Training',
          'Grid Extension Support',
          'Community Biogas Systems',
        ],
        metrics: {
          description: 'Energy access and efficiency metrics',
          indicators: [
            { metric: 'Households with clean energy access', value: '8,000+', period: 'Annual' },
            { metric: 'Solar systems installed', value: '2,500+', period: 'Annual' },
            { metric: 'Efficient stoves distributed', value: '5,000+', period: 'Annual' },
            { metric: 'CO2 emissions avoided (tons)', value: '15,000+', period: 'Annual' },
          ],
        },
        partners: [
          'IRENA',
          'World Bank',
          'UNDP',
          'Renewable Energy NGOs',
        ],
      },
      {
        id: 8,
        number: '8',
        title: 'Decent Work & Economic Growth',
        icon: '💼',
        color: '#a21e48',
        description: 'Promoting decent work and economic growth for all.',
        jhcoAlignment: 'Vocational training, job placement, business development',
        targets: [
          'Achieve higher levels of economic productivity',
          'Full employment and decent work for all',
          'Eradicate forced labor and child labor',
          'Promote safe working environments',
          'Encourage entrepreneurship and innovation',
        ],
        programs: [
          'Vocational Skills Training',
          'Job Placement Services',
          'Business Development Coaching',
          'Cooperative Formation Support',
          'Youth Employment Initiative',
        ],
        metrics: {
          description: 'Employment and economic growth indicators',
          indicators: [
            { metric: 'People receiving vocational training', value: '10,000+', period: 'Annual' },
            { metric: 'Job placement rate', value: '68%', period: 'Post-training' },
            { metric: 'Businesses created/supported', value: '1,200+', period: 'Annual' },
            { metric: 'Average income growth', value: '52%', period: 'Annual' },
          ],
        },
        partners: [
          'ILO',
          'World Bank',
          'UNDP',
          'Employer Associations',
        ],
      },
      {
        id: 9,
        number: '9',
        title: 'Industry, Innovation & Infrastructure',
        icon: '🏗️',
        color: '#dd1c3b',
        description: 'Building resilient infrastructure, fostering innovation.',
        jhcoAlignment: 'Community infrastructure, technology access, capacity building',
        targets: [
          'Develop reliable and sustainable infrastructure',
          'Promote innovation and technological advancement',
          'Increase access to ICT and internet',
          'Enhance industrial development',
          'Foster innovation in developing countries',
        ],
        programs: [
          'Community Infrastructure Projects',
          'Digital Literacy Centers',
          'Technology Training Programs',
          'Small Enterprise Incubation',
          'Innovation & Skills Workshops',
        ],
        metrics: {
          description: 'Infrastructure and innovation impact',
          indicators: [
            { metric: 'Infrastructure projects completed', value: '45+', period: 'Annual' },
            { metric: 'People with digital skills training', value: '6,000+', period: 'Annual' },
            { metric: 'Digital literacy rate', value: '71%', period: 'Annual' },
            { metric: 'Technology access points established', value: '120+', period: 'Annual' },
          ],
        },
        partners: [
          'UNIDO',
          'World Bank',
          'Tech NGOs',
          'Local Governments',
        ],
      },
      {
        id: 10,
        number: '10',
        title: 'Reduced Inequalities',
        icon: '📊',
        color: '#dd1c3b',
        description: 'Reducing inequality within and among countries.',
        jhcoAlignment: 'Targeted programs for marginalized communities, inclusive services',
        targets: [
          'Progressively achieve income growth for bottom 40%',
          'Promote social, economic, political inclusion',
          'Ensure equal opportunity and reduce inequalities',
          'Facilitate safe migration',
          'Improve representation in institutions',
        ],
        programs: [
          'Marginalized Community Support',
          'Disability Inclusion Programs',
          'Minority Rights Advocacy',
          'Inclusive Economic Programs',
          'Community Participatory Planning',
        ],
        metrics: {
          description: 'Inequality reduction metrics',
          indicators: [
            { metric: 'Marginalized community members supported', value: '20,000+', period: 'Annual' },
            { metric: 'Service accessibility for disabled', value: '89%', period: 'Annual' },
            { metric: 'Income inequality ratio (beneficiaries)', value: '0.52', period: 'Annual' },
            { metric: 'Community participation rate', value: '78%', period: 'Quarterly' },
          ],
        },
        partners: [
          'UN DESA',
          'Disability Rights Organizations',
          'Civil Rights NGOs',
        ],
      },
      {
        id: 11,
        number: '11',
        title: 'Sustainable Cities & Communities',
        icon: '🏘️',
        color: '#f05a28',
        description: 'Making cities inclusive, safe, resilient, and sustainable.',
        jhcoAlignment: 'Urban slum upgrading, disaster preparedness, housing support',
        targets: [
          'Provide safe housing and basic services',
          'Provide safe and sustainable transport',
          'Reduce deaths and damage from disasters',
          'Provide green and public spaces',
          'Support inclusive and sustainable urbanization',
        ],
        programs: [
          'Shelter & Housing Programs',
          'Urban Slum Upgrading',
          'Disaster Risk Reduction',
          'Public Space Development',
          'Urban Agriculture Initiative',
        ],
        metrics: {
          description: 'Urban sustainability and community indicators',
          indicators: [
            { metric: 'Families with improved shelter', value: '5,000+', period: 'Annual' },
            { metric: 'Communities with disaster preparedness', value: '120+', period: 'Annual' },
            { metric: 'Access to green spaces', value: '76%', period: 'Annual' },
            { metric: 'Disaster risk reduction effectiveness', value: '82%', period: 'Quarterly' },
          ],
        },
        partners: [
          'UN-Habitat',
          'World Bank',
          'City Authorities',
          'Shelter NGOs',
        ],
      },
      {
        id: 12,
        number: '12',
        title: 'Responsible Consumption & Production',
        icon: '♻️',
        color: '#bf8b2e',
        description: 'Ensuring sustainable consumption and production patterns.',
        jhcoAlignment: 'Waste management, sustainable agriculture, consumer education',
        targets: [
          'Achieve sustainable management of resources',
          'Reduce per capita waste',
          'Reduce food loss and waste',
          'Reduce chemical and waste pollution',
          'Reduce waste generation through prevention',
        ],
        programs: [
          'Community Waste Management Program',
          'Sustainable Agriculture Training',
          'Consumer Awareness Campaigns',
          'Circular Economy Initiatives',
          'Renewable Resource Management',
        ],
        metrics: {
          description: 'Sustainability and consumption metrics',
          indicators: [
            { metric: 'Communities with waste programs', value: '100+', period: 'Annual' },
            { metric: 'Farmers trained in sustainability', value: '3,500+', period: 'Annual' },
            { metric: 'Waste diversion rate', value: '67%', period: 'Annual' },
            { metric: 'Resource efficiency improvement', value: '48%', period: 'Annual' },
          ],
        },
        partners: [
          'UNEP',
          'FAO',
          'Sustainability NGOs',
          'Local Governments',
        ],
      },
      {
        id: 13,
        number: '13',
        title: 'Climate Action',
        icon: '🌍',
        color: '#407d52',
        description: 'Taking urgent action to combat climate change.',
        jhcoAlignment: 'Climate adaptation, renewable energy, environmental conservation',
        targets: [
          'Strengthen resilience to climate hazards',
          'Integrate climate action into policies',
          'Improve education on climate change',
          'Implement UNFCCC conventions',
          'Reduce climate disaster losses',
        ],
        programs: [
          'Climate Adaptation Training',
          'Renewable Energy Projects',
          'Environmental Conservation',
          'Climate Disaster Preparedness',
          'Reforestation & Tree Planting',
        ],
        metrics: {
          description: 'Climate action and environmental impact',
          indicators: [
            { metric: 'People trained in climate adaptation', value: '8,000+', period: 'Annual' },
            { metric: 'Trees planted', value: '50,000+', period: 'Annual' },
            { metric: 'Carbon sequestration (tons)', value: '25,000+', period: 'Annual' },
            { metric: 'Community climate resilience score', value: '72/100', period: 'Annual' },
          ],
        },
        partners: [
          'UNFCCC',
          'UNEP',
          'World Bank',
          'Environmental NGOs',
        ],
      },
      {
        id: 14,
        number: '14',
        title: 'Life Below Water',
        icon: '🌊',
        color: '#0a97d9',
        description: 'Conserving and sustainably using oceans and marine resources.',
        jhcoAlignment: 'Coastal community support, fisheries training, ocean conservation',
        targets: [
          'Protect marine and coastal ecosystems',
          'End overfishing and illegal fishing',
          'Conserve marine biodiversity',
          'Eliminate illegal fishing',
          'Protect marine protected areas',
        ],
        programs: [
          'Coastal Community Development',
          'Sustainable Fisheries Training',
          'Marine Conservation Initiatives',
          'Mangrove Restoration Projects',
          'Ocean Awareness Programs',
        ],
        metrics: {
          description: 'Marine conservation and fisheries metrics',
          indicators: [
            { metric: 'Coastal communities supported', value: '8,000+', period: 'Annual' },
            { metric: 'Fishers trained in sustainability', value: '2,000+', period: 'Annual' },
            { metric: 'Marine area under protection', value: '15,000+ hectares', period: 'Annual' },
            { metric: 'Fish stock sustainability', value: '78%', period: 'Annual' },
          ],
        },
        partners: [
          'FAO',
          'UNEP',
          'Marine Conservation NGOs',
          'Fisheries Authorities',
        ],
      },
      {
        id: 15,
        number: '15',
        title: 'Life on Land',
        icon: '🌲',
        color: '#56c596',
        description: 'Protecting, restoring terrestrial ecosystems.',
        jhcoAlignment: 'Reforestation, biodiversity conservation, sustainable land use',
        targets: [
          'Ensure conservation of terrestrial ecosystems',
          'End deforestation',
          'Combat desertification',
          'Prevent extinction of threatened species',
          'Eliminate poaching and trafficking',
        ],
        programs: [
          'Reforestation & Tree Planting',
          'Biodiversity Conservation',
          'Sustainable Land Management',
          'Wildlife Protection Programs',
          'Community-Based Forest Management',
        ],
        metrics: {
          description: 'Terrestrial ecosystem and biodiversity metrics',
          indicators: [
            { metric: 'Hectares restored/reforested', value: '8,500+', period: 'Annual' },
            { metric: 'Community forests managed', value: '25+', period: 'Annual' },
            { metric: 'Wildlife population recovery', value: '34%', period: 'Annual' },
            { metric: 'Land degradation reduction', value: '42%', period: 'Annual' },
          ],
        },
        partners: [
          'UNEP',
          'FAO',
          'Wildlife Conservation NGOs',
          'Forest Departments',
        ],
      },
      {
        id: 16,
        number: '16',
        title: 'Peace, Justice & Strong Institutions',
        icon: '⚖️',
        color: '#0066cc',
        description: 'Promoting peaceful and inclusive societies.',
        jhcoAlignment: 'Conflict resolution, governance support, community cohesion',
        targets: [
          'Reduce all forms of violence',
          'End abuse, exploitation, trafficking',
          'Promote rule of law and access to justice',
          'Build effective, inclusive institutions',
          'Reduce corruption and bribery',
        ],
        programs: [
          'Conflict Resolution Programs',
          'Governance & Accountability Training',
          'Community Policing Support',
          'Legal Aid Services',
          'Youth Peace Building Initiatives',
        ],
        metrics: {
          description: 'Peace, justice and governance metrics',
          indicators: [
            { metric: 'Communities with conflict resolution programs', value: '50+', period: 'Annual' },
            { metric: 'Access to justice improved', value: '72%', period: 'Annual' },
            { metric: 'Institutional capacity score', value: '68/100', period: 'Annual' },
            { metric: 'Corruption perception reduction', value: '38%', period: 'Annual' },
          ],
        },
        partners: [
          'UNDP',
          'UN OCHA',
          'Justice NGOs',
          'Peacebuilding Organizations',
        ],
      },
      {
        id: 17,
        number: '17',
        title: 'Partnerships for the Goals',
        icon: '🤝',
        color: '#1c4b7b',
        description: 'Strengthening means of implementation and partnerships.',
        jhcoAlignment: 'Multi-stakeholder partnerships, knowledge sharing, resource mobilization',
        targets: [
          'Strengthen domestic resource mobilization',
          'Enhance international development cooperation',
          'Promote fair and open trading system',
          'Enhance global partnership for sustainable development',
          'Encourage effective partnerships',
        ],
        programs: [
          'Strategic Partnership Networks',
          'Capacity Building Programs',
          'Knowledge & Technology Transfer',
          'South-South Cooperation',
          'Private Sector Engagement',
        ],
        metrics: {
          description: 'Partnership and implementation metrics',
          indicators: [
            { metric: 'Active partnerships', value: '150+', period: 'Annual' },
            { metric: 'Organizations in network', value: '500+', period: 'Annual' },
            { metric: 'Knowledge products shared', value: '85+', period: 'Annual' },
            { metric: 'Partnership effectiveness score', value: '81/100', period: 'Annual' },
          ],
        },
        partners: [
          'UN Global Compact',
          'Multiple UN Agencies',
          'NGO Networks',
          'Private Sector',
          'Academic Institutions',
        ],
      },
    ],

    integrationFramework: {
      title: 'JHCO\'s Integrated SDG Approach',
      subtitle: 'How JHCO connects programs across multiple SDGs for maximum impact',
      description: 'Rather than addressing SDGs in isolation, JHCO employs an integrated approach where single programs contribute to multiple SDGs simultaneously:',

      examples: [
        {
          title: 'Education & Livelihood Integration',
          sdgs: ['SDG 1', 'SDG 4', 'SDG 5', 'SDG 8'],
          description: 'School feeding programs address hunger while improving school attendance, enabling girls\' education and future livelihood opportunities.',
        },
        {
          title: 'Healthcare & Water Connection',
          sdgs: ['SDG 3', 'SDG 6', 'SDG 11'],
          description: 'Clean water access reduces waterborne diseases, improving health outcomes while building sustainable communities.',
        },
        {
          title: 'Economic Empowerment & Environment',
          sdgs: ['SDG 1', 'SDG 8', 'SDG 12', 'SDG 15'],
          description: 'Sustainable agriculture training creates income opportunities while conserving land and promoting responsible consumption.',
        },
        {
          title: 'Infrastructure & Innovation',
          sdgs: ['SDG 4', 'SDG 7', 'SDG 9', 'SDG 11'],
          description: 'Building learning centers with solar power creates sustainable infrastructure while advancing education and clean energy.',
        },
      ],
    },

    monitoring: {
      title: 'SDG Progress Monitoring',
      subtitle: 'Tracking alignment with UN indicators and targets',
      description: 'JHCO monitors SDG progress through:',
      methods: [
        'Alignment with UN SDG indicators',
        'Regular baseline and endline surveys',
        'Participatory monitoring with beneficiaries',
        'Third-party impact evaluations',
        'Data disaggregation by demographic groups',
        'Digital monitoring systems and dashboards',
      ],
    },
  },

  ar: {
    title: 'أهداف التنمية المستدامة للأمم المتحدة',
    heroTitle: 'توافق الهيئة الهاشمية مع أهداف التنمية المستدامة للأمم المتحدة',
    heroSubtitle: 'دعم جميع أهداف التنمية المستدامة الـ 17 من خلال برامج إنسانية متكاملة وشراكات استراتيجية',

    sdgDefinition: {
      title: 'حول أهداف التنمية المستدامة',
      description: 'أهداف التنمية المستدامة التابعة للأمم المتحدة هي دعوة عالمية للعمل على القضاء على الفقر وحماية الكوكب وضمان السلام والازدهار بحلول عام 2030. تدمج الهيئة هذه الأهداف الـ 17 المترابطة عبر جميع مبادراتها الإنسانية.',
    },

    sdgs: [
      {
        id: 1,
        number: '1',
        title: 'القضاء على الفقر',
        icon: '💰',
        color: '#e5243b',
        description: 'القضاء على الفقر بجميع أشكاله في كل مكان.',
        jhcoAlignment: 'المساعدة النقدية الطارئة وتدريب سبل المعيشة وبرامج التمويل الأصغر',
        targets: [
          'ضمان حقوق متساوية في الموارد الاقتصادية',
          'بناء صمود الفقراء والضعفاء',
          'تنفيذ أنظمة الحماية الاجتماعية',
          'ضمان حقوق متساوية في الأراضي والممتلكات',
        ],
        programs: [
          'برنامج المساعدة النقدية الطارئة',
          'التمويل الأصغر وتدريب الأعمال',
          'مبادرة تطوير سبل المعيشة',
          'برامج الحماية الاجتماعية',
        ],
        metrics: {
          description: 'مؤشرات الأداء الرئيسية لتقليل الفقر',
          indicators: [
            { metric: 'الأسر التي خرجت من الفقر', value: '15,000+', period: 'سنوي' },
            { metric: 'متوسط زيادة الدخل', value: '45%', period: 'بعد البرنامج' },
            { metric: 'تراكم الأصول', value: '35%', period: 'سنوي' },
            { metric: 'درجة المرونة الاقتصادية', value: '72/100', period: 'ربع سنوي' },
          ],
        },
        partners: [
          'البنك الدولي',
          'برنامج الأمم المتحدة الإنمائي',
          'البنك الإسلامي للتنمية',
          'المؤسسات الوطنية للتمويل الأصغر',
        ],
      },
      {
        id: 2,
        number: '2',
        title: 'القضاء على الجوع',
        icon: '🍽️',
        color: '#dda63b',
        description: 'القضاء على الجوع وتحقيق الأمن الغذائي والتغذية المحسنة.',
        jhcoAlignment: 'توزيع الغذاء وبرامج التغذية وتطوير الزراعة',
        targets: [
          'القضاء على جميع أشكال الجوع',
          'تحقيق الأمن الغذائي والتغذية المحسنة',
          'مضاعفة الإنتاجية الزراعية للمزارعين الصغار',
          'ضمان ممارسات زراعية مستدامة',
        ],
        programs: [
          'برنامج المساعدة الغذائية الطارئة',
          'برنامج تغذية الطلاب المدرسيين',
          'مراكز التغذية المجتمعية',
          'برنامج التدريب الزراعي والبذور',
          'مبادرة حدائق المطبخ الأسرية',
        ],
        metrics: {
          description: 'نتائج الأمن الغذائي والتغذية',
          indicators: [
            { metric: 'الأشخاص الذين تم توفير مساعدة غذائية لهم', value: '50,000+', period: 'سنوي' },
            { metric: 'تقليل سوء التغذية (الأطفال دون 5 سنوات)', value: '38%', period: 'سنوي' },
            { metric: 'طلاب المدارس المطعومين يومياً', value: '25,000+', period: 'سنوي' },
            { metric: 'درجة تنوع النظام الغذائي الأسري', value: '5.8/9', period: 'نصف سنوي' },
          ],
        },
        partners: [
          'برنامج الغذاء العالمي',
          'منظمة الأغذية والزراعة',
          'برنامج الأمم المتحدة للبيئة',
          'وزارات الزراعة المحلية',
          'منظمات التغذية غير الحكومية',
        ],
      },
      {
        id: 3,
        number: '3',
        title: 'الصحة الجيدة والرفاهية',
        icon: '🏥',
        color: '#4c9f38',
        description: 'ضمان حياة صحية وتعزيز الرفاهية للجميع في جميع الأعمار.',
        jhcoAlignment: 'العيادات الصحية المتنقلة وبرامج الوقاية من الأمراض وبرامج صحة الأم والطفل',
        targets: [
          'تقليل وفيات الأمومة',
          'القضاء على الوفيات التي يمكن الوقاية منها للمواليد الجدد',
          'مكافحة الإيدز والسل والملاريا',
          'تقليل الوفيات الناجمة عن التلوث والمواد الكيميائية الخطرة',
          'تحقيق التغطية الصحية الشاملة',
        ],
        programs: [
          'العيادات الصحية المتنقلة',
          'برنامج صحة الأم والطفل',
          'الوقاية من الأمراض والتطعيم',
          'خدمات الصحة العقلية',
          'برامج المياه والصرف الصحي والنظافة',
        ],
        metrics: {
          description: 'مؤشرات الصحة والرفاهية',
          indicators: [
            { metric: 'الاستشارات الطبية المقدمة', value: '100,000+', period: 'سنوي' },
            { metric: 'تغطية صحة الأم', value: '92%', period: 'سنوي' },
            { metric: 'معدل التطعيم للأطفال', value: '89%', period: 'سنوي' },
            { metric: 'المرضى ذوو حالة صحية محسنة', value: '84%', period: 'بعد العلاج' },
          ],
        },
        partners: [
          'منظمة الصحة العالمية',
          'منظمة الأمم المتحدة للطفولة',
          'أطباء بلا حدود',
          'وزارات الصحة الوطنية',
          'منظمات طبية غير حكومية',
        ],
      },
      {
        id: 4,
        number: '4',
        title: 'التعليم الجيد',
        icon: '📚',
        color: '#c6192b',
        description: 'ضمان التعليم الجيد والشامل والعادل للجميع.',
        jhcoAlignment: 'دعم المدارس وتدريب المعلمين وبرامج محو الأمية',
        targets: [
          'التعليم الابتدائي والثانوي المجاني',
          'الوصول العادل إلى التعليم ما قبل الابتدائي الجيد',
          'التعليم العالي الميسور التكلفة والجيد',
          'القضاء على الفوارق بين الجنسين في التعليم',
          'بناء مدارس آمنة وشاملة',
        ],
        programs: [
          'البنية التحتية للمدارس وإعادة التأهيل',
          'تدريب وتطوير المعلمين',
          'برامج محو الأمية للبالغين',
          'برامج المنح والإمدادات المدرسية',
          'مراكز التنمية في مرحلة الطفولة المبكرة',
        ],
        metrics: {
          description: 'نتائج الوصول والجودة التعليمية',
          indicators: [
            { metric: 'الطلاب الذين تم الوصول إليهم بدعم', value: '25,000+', period: 'سنوي' },
            { metric: 'معدل الالتحاق بالمدارس', value: '87%', period: 'سنوي' },
            { metric: 'معدل بقاء الطلاب في المدرسة', value: '85%', period: 'سنوي' },
            { metric: 'تحسن معدل محو الأمية', value: '42%', period: 'نصف سنوي' },
          ],
        },
        partners: [
          'اليونسكو',
          'منظمة الأمم المتحدة للطفولة',
          'الشراكة العالمية للتعليم',
          'وزارات التعليم الوطنية',
        ],
      },
      {
        id: 5,
        number: '5',
        title: 'المساواة بين الجنسين',
        icon: '♀️',
        color: '#ff3a21',
        description: 'تحقيق المساواة بين الجنسين وتمكين جميع النساء والفتيات.',
        jhcoAlignment: 'تمكين المرأة وتعليم الفتيات وخدمات الصحة الإنجابية',
        targets: [
          'القضاء على التمييز والعنف ضد النساء',
          'ضمان المشاركة الكاملة في القيادة',
          'حقوق الصحة الإنجابية الشاملة',
          'ضمان حقوق متساوية في الممتلكات والميراث',
          'ضمان الالتحاق الشامل بالمدارس',
        ],
        programs: [
          'برنامج تمكين المرأة اقتصادياً',
          'مبادرة تعليم الفتيات',
          'تدريب قيادة المرأة',
          'الوقاية من العنف القائم على نوع الجنس',
          'خدمات الصحة الإنجابية',
        ],
        metrics: {
          description: 'نتائج المساواة بين الجنسين وتمكين المرأة',
          indicators: [
            { metric: 'النساء في البرامج الاقتصادية', value: '12,000+', period: 'سنوي' },
            { metric: 'الفتيات مع دعم التعليم', value: '8,500+', period: 'سنوي' },
            { metric: 'النساء اللواتي يبلغن عن تمكين متزايد', value: '91%', period: 'بعد البرنامج' },
            { metric: 'النساء في مناصب قيادية', value: '48%', period: 'سنوي' },
          ],
        },
        partners: [
          'هيئة الأمم المتحدة للمرأة',
          'منظمة الأمم المتحدة للطفولة',
          'صندوق المساواة',
          'منظمات نسائية رائدة',
        ],
      },
      {
        id: 6,
        number: '6',
        title: 'المياه النظيفة والنظافة',
        icon: '💧',
        color: '#26bde2',
        description: 'ضمان توفر المياه والنظافة والصرف الصحي المستدام للجميع.',
        jhcoAlignment: 'حفر الآبار والمرافق الصحية وتثقيف النظافة',
        targets: [
          'تحقيق الوصول الشامل إلى مياه الشرب الآمنة',
          'النظافة والصرف الصحي الكافي للجميع',
          'القضاء على التغوط في العراء',
          'تحسين نوعية المياه وتقليل التلوث',
          'حماية واستعادة النظم الإيكولوجية المتعلقة بالمياه',
        ],
        programs: [
          'بناء وصيانة آبار المياه',
          'تثبيت مرافق النظافة والصرف الصحي',
          'برنامج تثقيف النظافة',
          'أنظمة حصاد مياه الأمطار',
          'مبادرة إدارة مياه الصرف الصحي',
        ],
        metrics: {
          description: 'مؤشرات الوصول إلى المياه والنظافة',
          indicators: [
            { metric: 'الأشخاص مع تحسن الوصول للمياه', value: '35,000+', period: 'سنوي' },
            { metric: 'المجتمعات مع مرافق النظافة', value: '180+', period: 'سنوي' },
            { metric: 'معدل القضاء على التغوط في العراء', value: '96%', period: 'سنوي' },
            { metric: 'امتثال نوعية المياه', value: '94%', period: 'ربع سنوي' },
          ],
        },
        partners: [
          'منظمة الصحة العالمية/يونيسيف',
          'البنك الدولي',
          'برنامج الأمم المتحدة الإنمائي',
          'منظمات المياه والنظافة الصحية',
        ],
      },
      {
        id: 7,
        number: '7',
        title: 'الطاقة النظيفة والميسورة',
        icon: '⚡',
        color: '#fccc0a',
        description: 'ضمان الوصول إلى خدمات الطاقة الحديثة للجميع.',
        jhcoAlignment: 'مشاريع الطاقة الشمسية والمواقد الفعالة وتدريب الطاقة',
        targets: [
          'ضمان الوصول الشامل إلى الكهرباء',
          'زيادة حصة الطاقة المتجددة',
          'مضاعفة التحسن العالمي في كفاءة الطاقة',
          'تعزيز التعاون الدولي في الطاقة النظيفة',
        ],
        programs: [
          'برنامج تثبيت الطاقة الشمسية',
          'توزيع المواقد الفعالة',
          'تدريب الطاقة المتجددة',
          'دعم توسيع الشبكة',
          'أنظمة الغاز الحيوي المجتمعية',
        ],
        metrics: {
          description: 'مؤشرات الوصول إلى الطاقة والكفاءة',
          indicators: [
            { metric: 'الأسر مع الوصول إلى الطاقة النظيفة', value: '8,000+', period: 'سنوي' },
            { metric: 'الأنظمة الشمسية المثبتة', value: '2,500+', period: 'سنوي' },
            { metric: 'المواقد الفعالة الموزعة', value: '5,000+', period: 'سنوي' },
            { metric: 'انبعاثات ثاني أكسيد الكربون المجنبة (طن)', value: '15,000+', period: 'سنوي' },
          ],
        },
        partners: [
          'الوكالة الدولية للطاقة المتجددة',
          'البنك الدولي',
          'برنامج الأمم المتحدة الإنمائي',
          'منظمات الطاقة المتجددة',
        ],
      },
      {
        id: 8,
        number: '8',
        title: 'العمل اللائق والنمو الاقتصادي',
        icon: '💼',
        color: '#a21e48',
        description: 'تعزيز العمل اللائق والنمو الاقتصادي للجميع.',
        jhcoAlignment: 'التدريب المهني وخدمات التوظيف وتطوير الأعمال',
        targets: [
          'تحقيق مستويات أعلى من الإنتاجية الاقتصادية',
          'العمالة الكاملة والعمل اللائق للجميع',
          'القضاء على العمل القسري وعمل الأطفال',
          'تعزيز بيئات العمل الآمنة',
          'تشجيع ريادة الأعمال والابتكار',
        ],
        programs: [
          'تدريب المهارات المهنية',
          'خدمات التوظيف',
          'تدريب تطوير الأعمال',
          'دعم تشكيل التعاونيات',
          'مبادرة توظيف الشباب',
        ],
        metrics: {
          description: 'مؤشرات التوظيف والنمو الاقتصادي',
          indicators: [
            { metric: 'الأشخاص الذين تلقوا تدريب مهني', value: '10,000+', period: 'سنوي' },
            { metric: 'معدل التوظيف', value: '68%', period: 'بعد التدريب' },
            { metric: 'الشركات المنشأة/المدعومة', value: '1,200+', period: 'سنوي' },
            { metric: 'نمو الدخل المتوسط', value: '52%', period: 'سنوي' },
          ],
        },
        partners: [
          'منظمة العمل الدولية',
          'البنك الدولي',
          'برنامج الأمم المتحدة الإنمائي',
          'جمعيات أصحاب العمل',
        ],
      },
      {
        id: 9,
        number: '9',
        title: 'الصناعة والابتكار والبنية التحتية',
        icon: '🏗️',
        color: '#dd1c3b',
        description: 'بناء بنية تحتية مرنة وتعزيز الابتكار.',
        jhcoAlignment: 'مشاريع البنية التحتية المجتمعية والوصول التكنولوجي وبناء القدرات',
        targets: [
          'تطوير بنية تحتية موثوقة ومستدامة',
          'تعزيز الابتكار والتقدم التكنولوجي',
          'زيادة الوصول إلى تكنولوجيا المعلومات والاتصالات والإنترنت',
          'تعزيز التطوير الصناعي',
          'تعزيز الابتكار في البلدان النامية',
        ],
        programs: [
          'مشاريع البنية التحتية المجتمعية',
          'مراكز محو الأمية الرقمية',
          'برامج تدريب التكنولوجيا',
          'حضانة الشركات الصغيرة',
          'ورش الابتكار والمهارات',
        ],
        metrics: {
          description: 'تأثير البنية التحتية والابتكار',
          indicators: [
            { metric: 'مشاريع البنية التحتية المنجزة', value: '45+', period: 'سنوي' },
            { metric: 'الأشخاص مع تدريب المهارات الرقمية', value: '6,000+', period: 'سنوي' },
            { metric: 'معدل محو الأمية الرقمية', value: '71%', period: 'سنوي' },
            { metric: 'نقاط الوصول التكنولوجي المنشأة', value: '120+', period: 'سنوي' },
          ],
        },
        partners: [
          'منظمة الأمم المتحدة للتنمية الصناعية',
          'البنك الدولي',
          'منظمات التكنولوجيا غير الحكومية',
          'الحكومات المحلية',
        ],
      },
      {
        id: 10,
        number: '10',
        title: 'تقليل الفوارق',
        icon: '📊',
        color: '#dd1c3b',
        description: 'تقليل عدم المساواة داخل البلدان وفيما بينها.',
        jhcoAlignment: 'برامج موجهة للمجتمعات المهمشة وخدمات شاملة',
        targets: [
          'تحقيق نمو الدخل للفئة الفقيرة',
          'تعزيز الشمول الاجتماعي والاقتصادي والسياسي',
          'ضمان تكافؤ الفرص وتقليل عدم المساواة',
          'تسهيل الهجرة الآمنة',
          'تحسين التمثيل في المؤسسات',
        ],
        programs: [
          'دعم المجتمعات المهمشة',
          'برامج إدراج الأشخاص ذوي الإعاقة',
          'الدعوة إلى حقوق الأقليات',
          'برامج اقتصادية شاملة',
          'التخطيط التشاركي المجتمعي',
        ],
        metrics: {
          description: 'مؤشرات تقليل عدم المساواة',
          indicators: [
            { metric: 'أعضاء المجتمع المهمش المدعومون', value: '20,000+', period: 'سنوي' },
            { metric: 'إمكانية الوصول إلى الخدمات للأشخاص ذوي الإعاقة', value: '89%', period: 'سنوي' },
            { metric: 'نسبة عدم المساواة في الدخل (المستفيدون)', value: '0.52', period: 'سنوي' },
            { metric: 'معدل المشاركة المجتمعية', value: '78%', period: 'ربع سنوي' },
          ],
        },
        partners: [
          'إدارة الأمم المتحدة للشؤون الاقتصادية والاجتماعية',
          'منظمات حقوق الأشخاص ذوي الإعاقة',
          'منظمات حقوق الإنسان',
        ],
      },
      {
        id: 11,
        number: '11',
        title: 'المدن والمجتمعات المستدامة',
        icon: '🏘️',
        color: '#f05a28',
        description: 'جعل المدن شاملة وآمنة وقادرة على الصمود ومستدامة.',
        jhcoAlignment: 'تحسين الأحياء الحضرية والتأهب للكوارث ودعم الإسكان',
        targets: [
          'توفير الإسكان الآمن والخدمات الأساسية',
          'توفير النقل الآمن والمستدام',
          'تقليل الوفيات والأضرار من الكوارث',
          'توفير المساحات الخضراء والعامة',
          'دعم التحضر الشامل والمستدام',
        ],
        programs: [
          'برامج المأوى والإسكان',
          'تحسين الأحياء الحضرية الفقيرة',
          'تقليل مخاطر الكوارث',
          'تطوير المساحات العامة',
          'مبادرة الزراعة الحضرية',
        ],
        metrics: {
          description: 'مؤشرات الاستدامة الحضرية والمجتمعية',
          indicators: [
            { metric: 'الأسر مع تحسين الملجأ', value: '5,000+', period: 'سنوي' },
            { metric: 'المجتمعات مع برامج التأهب للكوارث', value: '120+', period: 'سنوي' },
            { metric: 'الوصول إلى المساحات الخضراء', value: '76%', period: 'سنوي' },
            { metric: 'فعالية تقليل مخاطر الكوارث', value: '82%', period: 'ربع سنوي' },
          ],
        },
        partners: [
          'برنامج الأمم المتحدة للمستوطنات البشرية',
          'البنك الدولي',
          'السلطات المحلية',
          'منظمات المأوى',
        ],
      },
      {
        id: 12,
        number: '12',
        title: 'الاستهلاك والإنتاج المسؤولان',
        icon: '♻️',
        color: '#bf8b2e',
        description: 'ضمان أنماط استهلاك وإنتاج مستدامة.',
        jhcoAlignment: 'إدارة النفايات والزراعة المستدامة وتثقيف المستهلك',
        targets: [
          'تحقيق الإدارة المستدامة للموارد',
          'تقليل النفايات للفرد الواحد',
          'تقليل فقد ومهدر الغذاء',
          'تقليل تلوث الكيماويات والنفايات',
          'تقليل توليد النفايات من خلال الوقاية',
        ],
        programs: [
          'برنامج إدارة النفايات المجتمعية',
          'تدريب الزراعة المستدامة',
          'حملات الوعي بالمستهلك',
          'مبادرات الاقتصاد الدائري',
          'إدارة الموارد المتجددة',
        ],
        metrics: {
          description: 'مؤشرات الاستدامة والاستهلاك',
          indicators: [
            { metric: 'المجتمعات مع برامج النفايات', value: '100+', period: 'سنوي' },
            { metric: 'المزارعون المدربون على الاستدامة', value: '3,500+', period: 'سنوي' },
            { metric: 'معدل تحويل النفايات', value: '67%', period: 'سنوي' },
            { metric: 'تحسن كفاءة الموارد', value: '48%', period: 'سنوي' },
          ],
        },
        partners: [
          'برنامج الأمم المتحدة للبيئة',
          'منظمة الأغذية والزراعة',
          'منظمات الاستدامة غير الحكومية',
          'الحكومات المحلية',
        ],
      },
      {
        id: 13,
        number: '13',
        title: 'العمل المناخي',
        icon: '🌍',
        color: '#407d52',
        description: 'اتخاذ إجراءات عاجلة لمكافحة تغير المناخ.',
        jhcoAlignment: 'التكيف المناخي والطاقة المتجددة وحماية البيئة',
        targets: [
          'تعزيز الصمود تجاه الأخطار المناخية',
          'دمج العمل المناخي في السياسات',
          'تحسين التعليم بشأن تغير المناخ',
          'تنفيذ اتفاقيات الأمم المتحدة',
          'تقليل خسائر الكوارث المناخية',
        ],
        programs: [
          'تدريب التكيف المناخي',
          'مشاريع الطاقة المتجددة',
          'الحفاظ على البيئة',
          'التأهب لكوارث المناخ',
          'إعادة التشجير وزراعة الأشجار',
        ],
        metrics: {
          description: 'تأثير العمل المناخي والبيئة',
          indicators: [
            { metric: 'الأشخاص المدربون على التكيف المناخي', value: '8,000+', period: 'سنوي' },
            { metric: 'الأشجار المزروعة', value: '50,000+', period: 'سنوي' },
            { metric: 'عزل الكربون (طن)', value: '25,000+', period: 'سنوي' },
            { metric: 'درجة صمود المجتمع المناخية', value: '72/100', period: 'سنوي' },
          ],
        },
        partners: [
          'اتفاقية الأمم المتحدة الإطارية بشأن تغير المناخ',
          'برنامج الأمم المتحدة للبيئة',
          'البنك الدولي',
          'منظمات البيئة',
        ],
      },
      {
        id: 14,
        number: '14',
        title: 'الحياة تحت الماء',
        icon: '🌊',
        color: '#0a97d9',
        description: 'حماية واستخدام محيطاتنا وموارد البحار المستدام.',
        jhcoAlignment: 'دعم المجتمعات الساحلية وتدريب الصيد المستدام وحماية المحيط',
        targets: [
          'حماية النظم الإيكولوجية البحرية والساحلية',
          'إنهاء الصيد الجائر والصيد غير القانوني',
          'حماية التنوع البحري',
          'القضاء على الصيد غير القانوني',
          'حماية المناطق البحرية المحمية',
        ],
        programs: [
          'تطوير المجتمعات الساحلية',
          'تدريب الصيد المستدام',
          'مبادرات حماية المحيط',
          'مشاريع استعادة أشجار المانغروف',
          'برامج الوعي بالمحيط',
        ],
        metrics: {
          description: 'مؤشرات حماية المحيط والصيد',
          indicators: [
            { metric: 'المجتمعات الساحلية المدعومة', value: '8,000+', period: 'سنوي' },
            { metric: 'الصيادون المدربون على الاستدامة', value: '2,000+', period: 'سنوي' },
            { metric: 'المساحة البحرية تحت الحماية', value: '15,000+ هكتار', period: 'سنوي' },
            { metric: 'استدامة أسهم الأسماك', value: '78%', period: 'سنوي' },
          ],
        },
        partners: [
          'منظمة الأغذية والزراعة',
          'برنامج الأمم المتحدة للبيئة',
          'منظمات حماية المحيط',
          'سلطات الصيد',
        ],
      },
      {
        id: 15,
        number: '15',
        title: 'الحياة على الأرض',
        icon: '🌲',
        color: '#56c596',
        description: 'حماية واستعادة واستخدام النظم الإيكولوجية البرية بشكل مستدام.',
        jhcoAlignment: 'إعادة التشجير وحفظ التنوع البيولوجي والاستخدام المستدام للأراضي',
        targets: [
          'ضمان حماية النظم الإيكولوجية البرية',
          'إنهاء إزالة الغابات',
          'مكافحة التصحر',
          'منع انقراض الأنواع المهددة',
          'القضاء على الصيد غير المشروع والاتجار',
        ],
        programs: [
          'إعادة التشجير وزراعة الأشجار',
          'حفظ التنوع البيولوجي',
          'الإدارة المستدامة للأراضي',
          'برامج حماية الحياة البرية',
          'إدارة الغابات المجتمعية',
        ],
        metrics: {
          description: 'مؤشرات النظم الإيكولوجية البرية والتنوع البيولوجي',
          indicators: [
            { metric: 'الهكتارات المستعادة/المعاد تشجيرها', value: '8,500+', period: 'سنوي' },
            { metric: 'الغابات المجتمعية المدارة', value: '25+', period: 'سنوي' },
            { metric: 'التعافي من حيوانات الحياة البرية', value: '34%', period: 'سنوي' },
            { metric: 'تقليل تدهور الأراضي', value: '42%', period: 'سنوي' },
          ],
        },
        partners: [
          'برنامج الأمم المتحدة للبيئة',
          'منظمة الأغذية والزراعة',
          'منظمات حفظ الحياة البرية',
          'إدارات الغابات',
        ],
      },
      {
        id: 16,
        number: '16',
        title: 'السلام والعدالة والمؤسسات القوية',
        icon: '⚖️',
        color: '#0066cc',
        description: 'تعزيز المجتمعات السلمية والشاملة.',
        jhcoAlignment: 'برامج حل النزاعات ودعم الحوكمة وتماسك المجتمع',
        targets: [
          'تقليل جميع أشكال العنف',
          'إنهاء الإساءة والاستغلال والاتجار',
          'تعزيز سيادة القانون والوصول إلى العدالة',
          'بناء مؤسسات فعالة وشاملة',
          'تقليل الفساد والرشوة',
        ],
        programs: [
          'برامج حل النزاعات',
          'تدريب الحوكمة والمساءلة',
          'دعم الشرطة المجتمعية',
          'خدمات المساعدة القانونية',
          'مبادرات بناء السلام للشباب',
        ],
        metrics: {
          description: 'مؤشرات السلام والعدالة والحوكمة',
          indicators: [
            { metric: 'المجتمعات مع برامج حل النزاعات', value: '50+', period: 'سنوي' },
            { metric: 'تحسن الوصول إلى العدالة', value: '72%', period: 'سنوي' },
            { metric: 'درجة قدرة المؤسسات', value: '68/100', period: 'سنوي' },
            { metric: 'تقليل إدراك الفساد', value: '38%', period: 'سنوي' },
          ],
        },
        partners: [
          'برنامج الأمم المتحدة الإنمائي',
          'مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية',
          'منظمات العدالة',
          'منظمات بناء السلام',
        ],
      },
      {
        id: 17,
        number: '17',
        title: 'الشراكات لتحقيق الأهداف',
        icon: '🤝',
        color: '#1c4b7b',
        description: 'تعزيز وسائل التنفيذ والشراكات العالمية.',
        jhcoAlignment: 'شبكات الشراكات المتعددة الأطراف وتبادل المعرفة وتعبئة الموارد',
        targets: [
          'تعزيز تعبئة الموارد المحلية',
          'تعزيز التعاون الإنمائي الدولي',
          'تعزيز نظام تجاري عادل ومفتوح',
          'تعزيز الشراكة العالمية للتنمية المستدامة',
          'تشجيع الشراكات الفعالة',
        ],
        programs: [
          'شبكات الشراكة الاستراتيجية',
          'برامج بناء القدرات',
          'نقل المعرفة والتكنولوجيا',
          'التعاون جنوب-جنوب',
          'انخراط القطاع الخاص',
        ],
        metrics: {
          description: 'مؤشرات الشراكة والتنفيذ',
          indicators: [
            { metric: 'الشراكات النشطة', value: '150+', period: 'سنوي' },
            { metric: 'المنظمات في الشبكة', value: '500+', period: 'سنوي' },
            { metric: 'منتجات المعرفة المشتركة', value: '85+', period: 'سنوي' },
            { metric: 'درجة فعالية الشراكة', value: '81/100', period: 'سنوي' },
          ],
        },
        partners: [
          'العهد العالمي للأمم المتحدة',
          'وكالات الأمم المتحدة المتعددة',
          'شبكات المنظمات غير الحكومية',
          'القطاع الخاص',
          'المؤسسات الأكاديمية',
        ],
      },
    ],

    integrationFramework: {
      title: 'النهج المتكامل للهيئة في أهداف التنمية المستدامة',
      subtitle: 'كيف تربط الهيئة البرامج عبر أهداف متعددة للتأثير الأقصى',
      description: 'بدلاً من معالجة أهداف التنمية المستدامة بمعزل عن بعضها، تستخدم الهيئة نهجاً متكاملاً حيث تساهم البرامج الفردية في أهداف متعددة في نفس الوقت:',

      examples: [
        {
          title: 'تكامل التعليم والعمل',
          sdgs: ['الهدف 1', 'الهدف 4', 'الهدف 5', 'الهدف 8'],
          description: 'برامج إطعام الطلاب تعالج الجوع مع تحسين الحضور المدرسي، مما يمكن من تعليم الفتيات وفرص العمل المستقبلي.',
        },
        {
          title: 'ربط الصحة والمياه',
          sdgs: ['الهدف 3', 'الهدف 6', 'الهدف 11'],
          description: 'الوصول إلى المياه النظيفة يقلل من الأمراض المعدية، مما يحسن النتائج الصحية مع بناء مجتمعات مستدامة.',
        },
        {
          title: 'التمكين الاقتصادي والبيئة',
          sdgs: ['الهدف 1', 'الهدف 8', 'الهدف 12', 'الهدف 15'],
          description: 'تدريب الزراعة المستدامة ينشئ فرص دخل مع حماية الأراضي وتعزيز الاستهلاك المسؤول.',
        },
        {
          title: 'البنية التحتية والابتكار',
          sdgs: ['الهدف 4', 'الهدف 7', 'الهدف 9', 'الهدف 11'],
          description: 'بناء مراكز التعليم بالطاقة الشمسية ينشئ بنية تحتية مستدامة مع تقدم التعليم والطاقة النظيفة.',
        },
      ],
    },

    monitoring: {
      title: 'مراقبة تقدم أهداف التنمية المستدامة',
      subtitle: 'تتبع التوافق مع المؤشرات والأهداف الأممية',
      description: 'تراقب الهيئة التقدم نحو أهداف التنمية المستدامة من خلال:',
      methods: [
        'التوافق مع مؤشرات الأمم المتحدة لأهداف التنمية المستدامة',
        'الدراسات الاستقصائية الدورية للخط الأساسي والنهاية',
        'المراقبة التشاركية مع المستفيدين',
        'تقييمات التأثير من قبل أطراف ثالثة',
        'تصنيف البيانات حسب المجموعات الديموغرافية',
        'الأنظمة الرقمية والتقارير والخطط الموجهة بالبيانات',
      ],
    },
  },
};

interface SDGCardProps {
  sdg: (typeof pageContent.en.sdgs)[0];
  isExpanded: boolean;
  onToggle: () => void;
  locale: string;
}

const SDGCard: React.FC<SDGCardProps> = ({ sdg, isExpanded, onToggle, locale }) => {
  const t = pageContent[locale as keyof typeof pageContent];

  return (
    <div
      onClick={onToggle}
      style={{
        backgroundColor: royalColors.bgLight,
        border: `2px solid ${sdg.color}`,
        borderRadius: borderRadius.lg,
        padding: spacing.lg,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isExpanded ? shadows.lg : shadows.md,
        transform: isExpanded ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md, marginBottom: spacing.md }}>
        <div
          style={{
            fontSize: '48px',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: sdg.color,
            borderRadius: borderRadius.full,
            color: 'white',
          }}
        >
          {sdg.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: royalTypography.sizes.h5,
              fontWeight: royalTypography.weights.bold,
              color: royalColors.textOfficial,
              marginBottom: spacing.xs,
            }}
          >
            SDG {sdg.number}: {sdg.title}
          </div>
          <p
            style={{
              margin: 0,
              fontSize: royalTypography.sizes.small,
              color: royalColors.textSecondary,
              lineHeight: royalTypography.lineHeights.normal,
            }}
          >
            {sdg.description}
          </p>
        </div>
      </div>

      {isExpanded && (
        <div style={{ marginTop: spacing.lg, paddingTop: spacing.lg, borderTop: `1px solid ${royalColors.borderSubtle}` }}>
          <div style={{ marginBottom: spacing.lg }}>
            <h4
              style={{
                fontSize: royalTypography.sizes.h5,
                fontWeight: royalTypography.weights.bold,
                color: royalColors.textOfficial,
                marginBottom: spacing.md,
              }}
            >
              {locale === 'en' ? 'JHCO\'s Alignment' : 'توافق الهيئة'}
            </h4>
            <p style={{ margin: 0, color: royalColors.textSecondary }}>{sdg.jhcoAlignment}</p>
          </div>

          <div style={{ marginBottom: spacing.lg }}>
            <h4
              style={{
                fontSize: royalTypography.sizes.h5,
                fontWeight: royalTypography.weights.bold,
                color: royalColors.textOfficial,
                marginBottom: spacing.md,
              }}
            >
              {locale === 'en' ? 'Target Areas' : 'مناطق التركيز'}
            </h4>
            <ul style={{ margin: 0, paddingLeft: spacing.lg, color: royalColors.textSecondary }}>
              {sdg.targets.map((target, idx) => (
                <li key={idx} style={{ marginBottom: spacing.sm }}>
                  {target}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: spacing.lg }}>
            <h4
              style={{
                fontSize: royalTypography.sizes.h5,
                fontWeight: royalTypography.weights.bold,
                color: royalColors.textOfficial,
                marginBottom: spacing.md,
              }}
            >
              {locale === 'en' ? 'JHCO Programs' : 'برامج الهيئة'}
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: spacing.md }}>
              {sdg.programs.map((program, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: spacing.md,
                    backgroundColor: royalColors.ivoryBg,
                    borderRadius: borderRadius.md,
                    fontSize: royalTypography.sizes.small,
                    color: royalColors.textSecondary,
                  }}
                >
                  {program}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: spacing.lg }}>
            <h4
              style={{
                fontSize: royalTypography.sizes.h5,
                fontWeight: royalTypography.weights.bold,
                color: royalColors.textOfficial,
                marginBottom: spacing.md,
              }}
            >
              {sdg.metrics.description}
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: spacing.md }}>
              {sdg.metrics.indicators.map((indicator, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: spacing.md,
                    backgroundColor: royalColors.richCream,
                    borderLeft: `4px solid ${sdg.color}`,
                    borderRadius: borderRadius.md,
                  }}
                >
                  <div
                    style={{
                      fontSize: royalTypography.sizes.h4,
                      fontWeight: royalTypography.weights.bold,
                      color: sdg.color,
                      marginBottom: spacing.xs,
                    }}
                  >
                    {indicator.value}
                  </div>
                  <div style={{ fontSize: royalTypography.sizes.small, color: royalColors.textSecondary, marginBottom: spacing.xs }}>
                    {indicator.metric}
                  </div>
                  <div style={{ fontSize: royalTypography.sizes.tiny, color: royalColors.textSecondary }}>
                    {indicator.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: royalTypography.sizes.h5,
                fontWeight: royalTypography.weights.bold,
                color: royalColors.textOfficial,
                marginBottom: spacing.md,
              }}
            >
              {locale === 'en' ? 'Partner Organizations' : 'المنظمات الشريكة'}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md }}>
              {sdg.partners.map((partner, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: `${spacing.sm} ${spacing.md}`,
                    backgroundColor: sdg.color,
                    color: 'white',
                    borderRadius: borderRadius.md,
                    fontSize: royalTypography.sizes.small,
                  }}
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function SDGAlignmentPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as keyof typeof pageContent;
  const t = pageContent[locale] || pageContent.en;
  const [expandedSDG, setExpandedSDG] = React.useState<number | null>(null);

  return (
    <div style={{ backgroundColor: royalColors.bgRefined, minHeight: '100vh' }}>
      {/* Hero Section */}
      <div
        style={{
          background: gradients.royalPrimary,
          color: 'white',
          padding: `${spacing.xl} ${spacing.lg}`,
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: royalTypography.sizes.h1,
            fontWeight: royalTypography.weights.bold,
            margin: 0,
            marginBottom: spacing.md,
            letterSpacing: royalTypography.letterSpacing.wider,
          }}
        >
          {t.heroTitle}
        </h1>
        <p
          style={{
            fontSize: royalTypography.sizes.h4,
            margin: 0,
            maxWidth: '800px',
            marginX: 'auto',
            lineHeight: royalTypography.lineHeights.relaxed,
          }}
        >
          {t.heroSubtitle}
        </p>
      </div>

      <div style={{ padding: `${spacing.xl} ${spacing.lg}`, maxWidth: '1400px', margin: '0 auto' }}>
        {/* SDG Definition */}
        <div style={{ marginBottom: spacing.xxl }}>
          <h2
            style={{
              fontSize: royalTypography.sizes.h2,
              fontWeight: royalTypography.weights.bold,
              color: royalColors.deepRoyal,
              marginBottom: spacing.lg,
              textAlign: 'center',
            }}
          >
            {t.sdgDefinition.title}
          </h2>
          <div
            style={{
              backgroundColor: 'white',
              padding: spacing.lg,
              borderRadius: borderRadius.lg,
              boxShadow: shadows.md,
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <p
              style={{
                fontSize: royalTypography.sizes.body,
                color: royalColors.textSecondary,
                lineHeight: royalTypography.lineHeights.normal,
                margin: 0,
              }}
            >
              {t.sdgDefinition.description}
            </p>
          </div>
        </div>

        {/* SDG Grid */}
        <div style={{ marginBottom: spacing.xxl }}>
          <h2
            style={{
              fontSize: royalTypography.sizes.h2,
              fontWeight: royalTypography.weights.bold,
              color: royalColors.deepRoyal,
              marginBottom: spacing.lg,
              textAlign: 'center',
            }}
          >
            {locale === 'en' ? '17 Sustainable Development Goals' : '17 هدفاً من أهداف التنمية المستدامة'}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: spacing.lg,
            }}
          >
            {t.sdgs.map((sdg) => (
              <SDGCard
                key={sdg.id}
                sdg={sdg}
                isExpanded={expandedSDG === sdg.id}
                onToggle={() => setExpandedSDG(expandedSDG === sdg.id ? null : sdg.id)}
                locale={locale}
              />
            ))}
          </div>
        </div>

        {/* Integration Framework */}
        <div style={{ marginBottom: spacing.xxl }}>
          <h2
            style={{
              fontSize: royalTypography.sizes.h2,
              fontWeight: royalTypography.weights.bold,
              color: royalColors.deepRoyal,
              marginBottom: spacing.lg,
              textAlign: 'center',
            }}
          >
            {t.integrationFramework.title}
          </h2>
          <p
            style={{
              fontSize: royalTypography.sizes.body,
              color: royalColors.textSecondary,
              textAlign: 'center',
              marginBottom: spacing.lg,
              maxWidth: '900px',
              margin: '0 auto 2rem',
            }}
          >
            {t.integrationFramework.description}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: spacing.lg,
            }}
          >
            {t.integrationFramework.examples.map((example, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  padding: spacing.lg,
                  borderRadius: borderRadius.lg,
                  boxShadow: shadows.md,
                }}
              >
                <h3
                  style={{
                    fontSize: royalTypography.sizes.h4,
                    fontWeight: royalTypography.weights.bold,
                    color: royalColors.deepRoyal,
                    marginBottom: spacing.md,
                  }}
                >
                  {example.title}
                </h3>
                <div style={{ marginBottom: spacing.md }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.sm }}>
                    {example.sdgs.map((sdg, sdgIdx) => (
                      <span
                        key={sdgIdx}
                        style={{
                          padding: `${spacing.sm} ${spacing.md}`,
                          backgroundColor: royalColors.ivoryBg,
                          color: royalColors.deepRoyal,
                          borderRadius: borderRadius.md,
                          fontSize: royalTypography.sizes.small,
                          fontWeight: royalTypography.weights.semibold,
                        }}
                      >
                        {sdg}
                      </span>
                    ))}
                  </div>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: royalTypography.sizes.small,
                    color: royalColors.textSecondary,
                    lineHeight: royalTypography.lineHeights.normal,
                  }}
                >
                  {example.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoring */}
        <div style={{ marginBottom: spacing.xxl }}>
          <div
            style={{
              backgroundColor: 'white',
              padding: spacing.xl,
              borderRadius: borderRadius.lg,
              boxShadow: shadows.md,
            }}
          >
            <h2
              style={{
                fontSize: royalTypography.sizes.h2,
                fontWeight: royalTypography.weights.bold,
                color: royalColors.deepRoyal,
                marginBottom: spacing.lg,
              }}
            >
              {t.monitoring.title}
            </h2>
            <p
              style={{
                fontSize: royalTypography.sizes.body,
                color: royalColors.textSecondary,
                marginBottom: spacing.lg,
              }}
            >
              {t.monitoring.subtitle}
            </p>
            <p
              style={{
                fontSize: royalTypography.sizes.body,
                color: royalColors.textSecondary,
                marginBottom: spacing.lg,
              }}
            >
              {t.monitoring.description}
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: spacing.lg,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: spacing.md,
              }}
            >
              {t.monitoring.methods.map((method, idx) => (
                <li
                  key={idx}
                  style={{
                    color: royalColors.textSecondary,
                    fontSize: royalTypography.sizes.body,
                    lineHeight: royalTypography.lineHeights.normal,
                  }}
                >
                  {method}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

# The LegitiMate

# Introduction
Public administrations have many different tasks. These tasks are assigned by an act to a specific public agency. Some of these legal tasks are automatically executed. In those cases algorithms are used. For example, imposing fines for speeding, reclaiming allowances or granting state pension or child benefit. As with a more visible execution of public tasks such as building dikes, it is important to know how these activities contribute to the designated task and which choices have been made. Automated execution of legislation is a public activity too and must therefore be legitimate.

While in literature the concept of “digital discretion” is elaborated, in practice Dutch public administration isn’t obliged to show and tell how the buzzing IT-systems are designed and how the design and use is in accordance with the legislation, principles of good administration and the prohibition of discrimination. This explains why up to today public agencies are barely aware of the legal and other aspects of these routines. With The LegitiMate, the executive branch of the government can be held accountable. It facilitates as well that external reviewers can form an opinion of the choices and system the public administration has (let) developed and implemented. The LegitiMate is intended to assess in a way that the administration can develop and improve. It is a visitation research tool. 

## Who is The LegitiMate for?
The LegitiMate is a method to understand and assess the automated execution of legislation by public administration in a standardized manner. The LegitiMate is based on both the highly specialized professionalism of the employees of the administrative agencies, and the increasing demand in society for public administration to be accountable for ever growing automation.

It is intended for public agencies that automatically execute legislation and make individual administrative decisions (ADM). With The Legitimate the agency can show the internal productions, the relevant steps and safe guards. It will probably lead to self-assessments and better understanding at management level of the range of responsibilities. The agency can also invite a visitation team with assessors from other public agencies to conduct research. With the result, the agency is provided with recommendations.

When new IT systems are being developed, the agency can immediately see what documents are needed in order to provide (external) insight.

The LegitiMate is also intended for assessors: the lawyers, auditors and fellow IT developers who need meaningful information on how the legislation is automatically executed.

## How can I contribute?
On July 1, 2022, the Dutch prototype was presented to the Ministry of the Interior and Kingdom Relations and published on GitHub. The working method has been developed, tested and adapted in a few sprints. Please contact [Marlies van Eck](mailto:marlies@hooghiemstra-en-partners.nl) if you want to contribute or experiment with the use of The LegitiMate.

# A method to evaluate and learn
The LegitiMate is based on the principles of visitation research. It is a visitation tool. Large parts of the research are delegated to the expert, the public agency.

The LegitiMate indicates the necessary documents; The LegitiMate List of Documents. Another part of the LegitiMate are the three questionnaires that need to be answered by the administrative agency: The LegitiMate Questionnaires.

Once the answers and documents are collected, the visitation team will start its investigation by conducting interviews and audit sampling.

The LegitiMate is an important first step towards transparency and accountability for the use of algorithms in automated execution of legislation.

## Interdisciplinary and generic
Auditors and assessors each have their own professional frame work and focus points when they want to assess the automated execution of legislation. We figured that it should be possible to align at least three disciplines to get a more holistic approach. On the other hand we try to help public agencies by standardizing the set of documents and questionnaires so they are not all asked to invent the wheel.

The LegitiMate is meant as an holistic method facilitating three disciplines in assessing automated execution in different types of public agencies.

With The LegitiMate:
- a legal expert can judge the legitimacy of the automated execution including compliance with the right to good administration and prohibition of discrimination,
- an information expert can judge the quality of the automated implementation,
- an accountant or internal controller can judge the financial legitimacy of the automated execution.

## Relationship with other initiatives
In the Netherlands a lot is happening regarding the use of algorithms by the public administration. For example, members of the Parliament voted in favour of a National Algorithm register for public agencies and the government has an open source policy.

Also, increasing attention is paid on the supervision of the use of algorithms. However, supervisory activity is only possible if the public agency itself has insight into its own complex and highly technical (legal) processes.

# How is legislation automatically executed?
When public administration makes administrative decisions in individual cases involving large numbers and many comparable repetitive tasks, this process often is automated. To enable this the particular act/legislation needs to be translated and choices must be made to decide how the legislation will be implemented. After discussions with several experts in different agencies working on these translations and implementation we distinguished this process in the following steps.

![Processen wetsuitvoering](media/processen-wetsuitvoering.png "Processen wetsuitvoering")

This process map is an illustration, not a prescription. All public agencies have their own practices, internal traditions and work flows. This will remain. The process map and the several stages we describe and use in The LegitiMate are a means to an end: a dialogue.

## Automated decisions or decision support systems?
The LegitiMate is designed to assess the automated execution of legislation by public agencies. In literature on ADM its very common to distinguish easy from hard cases. This difference can be witnessed in practice too. To understand the internal routines its necessary to discuss the commonly used difference in easy and hard cases.

Easy cases are processed without human intervention: the decision is made automatically.

A minority of cases is partly handled with human intervention (hard cases / /dropouts/ejected).  In these cases the algorithms perform as decision support systems.

The public administration uses selection or prioritization methods to distinguish cases in those who lead to fully automated decisions and those that need human judgments and therefor are partially automated. By applying selection rules (sometimes multi staged / in several rounds to match available staff capacity), the case can be assigned to a public servant for processing. The latter may request additional information or carry out additional checks resulting in a decision made in collaboration with the machine. In the legal perspective, we call this the preparatory acts.

![Voorbereidende handelingen](media/voorbereidende-handelingen.png "Voorbereidende handelingen")

## On legal rules, rules and algorithms
Judging the legitimacy of computerized actions requires a bridge or connection (interface) between the code the machine uses and the legal resources that dictate what the machine is supposed to do.

The code used for computers is a good language for software developers, but not for many other people. Lawyers are good at understanding the meaning of legal sources. This is often difficult for non-lawyers. In a multidisciplinary group, a common language is needed to understand the meaning of legal sources and the way in which they should be incorporated into code.

Many public agencies use a rule-based solution for this; think of different methods for creating business rules and decision models. This is a language of algorithms in the form of 'rules' in a language that can be understood by both man and machine. We call these decision and calculation rules.

Our goal with The LegitiMate is to find a common language / method to describe both the quality of interpretation of legal resources and the coding of algorithms. By doing so internal discussion and/or external testing is enable, leading to improvement of the quality of algorithms.

## On algorithms and source code
Ultimately, algorithms are converted into computer code: the source code.

## The scope of The LegitiMate
The LegitiMate covers the entire process from act to individual administrative decision and afterwards, the response of the citizens (telephone calls, complaints, objections) and the chain effects / propagation.

It is made for the automated execution of legislation by the public agencies using knowledge-based algorithms.

Knowledge-based algorithms use rules for making calculations, solving a problem, answering a question, or making a decision.
The rules we are talking about can be divided into different types: decision rules (with which you test variables for true/false, and then arrive at a decision) and calculation rules (with which you make a sum with those variables). There are many more, although they may also be classified as subcategories of these two.

If it has to be determined whether an applicant falls under a certain category (e.g. “partner”), you also run through a number of variables in the definition of partner, and actually make a decision about that. After this you take the result of this into account in a subsequent decision (e.g. about entitlement to a supplement). We could also call that a classification rule.

Selection rules determine which decisions must be taken (partly) by a human civil servant. Sometimes these are rules are preprogrammed (such as 'all cases in which applicants provide an address other than that is officially registered) and sometimes statistical algorithms are used.

The LegitiMate therefore isn’t (yet) suitable for accounting for or assessing the use of statistical algorithms, including machine learning that make taxations about the probability of an outcome based on statistical analysis of data from the past. This may be addressed later.

## Propagation
Within public administration, many personal data and systems are interconnected. This means that both the input (data) and the result (a decision) have relationships with other processes, other domains, other laws and other agencies. Providing insight into these relationships and assessing whether this implementation is in accordance with the law, principles of good administration and the prohibition of discrimination is also part of The LegitiMate.

## What about IT-systems bought by the public administration? 
A lot of documentation is needed to assess the legitimacy of the systems. Public administration is responsible for the correct interpretation of legislation and compliance with general principles of good administration. This doesn’t alter if it is not developed by public servants but purchased or commissioned. In case the documentation cannot be made available by the supplier or if the supplier refuses to do so due to intellectual property rights, The LegitiMate cannot be used. It will of course have implications regarding the accountability of the public administration.

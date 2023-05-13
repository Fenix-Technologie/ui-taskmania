import { CommonAboutText } from "@/components/page/about/CommonAboutText";

export default function about() {

  const aboutText = [
    {
      title: 'What is Taskmania?',
      text: 'Taskmania is a web-based project management tool that allows you to organize and manage your tasks, projects, and workflows using boards, lists, and cards.'
    },
    {
      title: 'How do I get started with Taskmania?',
      text: "To get started with Taskmania, simply visit our website and create an account. Once you've signed up, you can start creating boards, lists, and cards to organize your projects and tasks."
    },
    {
      title: 'How do I create a board?',
      text: "To create a board, log in to your Taskmania account and click on the 'Create Board' button. Give your board a name and customize it as desired. You can choose a background, add team members, and set permissions for collaboration"
    },
    {
      title: 'How do I add lists and cards to a board?',
      text: 'Within a board, you can add lists to represent different stages or categories of your project. To add a list, click on the "Add List" button on the board and provide a name for the list. To add cards within a list, click on the "Add Card" button within the list and enter the card details.'
    },
    {
      title: 'Can I collaborate with others on a board?',
      text: 'Yes, you can collaborate with others on a board. You can invite team members to join your board, assign cards to specific team members, leave comments on cards, and use @mentions to notify others. Collaboration is one of the key features of Taskmania.'
    },
    {
      title: 'How do I move cards between lists?',
      text: 'To move a card between lists, simply click and drag the card to the desired list. You can reorder cards within a list or move them to different lists based on their progress or category.'
    },
    {
      title: 'Can I set task dates and reminders for cards?',
      text: 'Yes, you can set task dates for cards and even add reminders. Open the card you want to set a task date for, click on the task date section, and select the date and time. Taskmania will automatically remind you when the task date approaches'
    },
    {
      title: 'How secure is Taskmania?',
      text: 'We take security seriously. Taskmania employs various security measures, including encryption, secure data storage, and regular security audits, to protect your information and ensure a safe user experience.'
    },
    {
      title: 'How can I get support or contact customer service?',
      text: "If you need support or have any questions, you can visit our support page on our website. You'll find helpful articles, tutorials, and contact information to reach our customer service team. We're here to assist you and address any concerns you may have."
    }
  ]

  return (
    <main className="w-full h-[calc(100vh-7rem-4rem)] flex flex-col items-center justify-center gap-3 bg-slate-300">
      <div className="w-full h-full flex flex-col items-center">
        <div className="max-w-2xl flex flex-row mb-3 mt-11">
          <h1 className="text-title self-start">FAQs</h1>
        </div>
        <section className="max-w-2xl h-[calc(100vh-7rem-4rem-30px-48px-68px)] flex flex-col items-center px-8 py-7 bg-white rounded-xl">
          <h3 className="text-title-about self-start mb-5">About Taskmania</h3>
          <article className="w-full h-full flex-col gap-5 px-3 overflow-auto scrollbar scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm scrollbar-w-[6px] scrollbar-thumb-gray-50 scrollbar-track-gray-100">
            {aboutText.map((el, index) =>
              <CommonAboutText key={`${el.title}-${index}`} title={el.title} text={el.text} />
            )
            }
          </article>
        </section>
      </div>
    </main>
  )
}
import ButtonTab from "../../islands/buttonControl/ButtonTab.tsx";
import Article from "../../islands/buttonControl/Article.tsx";

interface Content {
  title: string;
  /**
   * @format html
   */
  content: string[];
}

export interface ItemsTopic {
  title: string;
  /**
   * @format html
   */
  subTitle: string;
  /**
   * @format html
   */
  content: Content;
  button?: {
    label?: string;
    href?: string;
  };
  flagTime?: string;
}

export interface Topics {
  title: string;
  /**
   * @description recomened max 3
   */
  itemsTopics: ItemsTopic[];
}

export interface Props {
  title: string;
  /**
   * @format html
   */
  subTitle: string;
  /**
   * @description recomened max 3
   */
  topics: Topics[];
}

const BASE_PROPS = {
  title: "Program",
  topics: [
    {
      title: "The Post-AI Web Builder",
      flagTime: "1 hour",
      itemsTopics: [
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
      ],
    },
    {
      title: "The Post-AI Web Builder",
      flagTime: "1 hour",
      itemsTopics: [
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
      ],
    },
    {
      title: "The Post-AI Web Builder",
      flagTime: "1 hour",
      itemsTopics: [
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
      ],
    },
  ],
  subTitle:
    "<p>Unlock advanced audience insights and comprehensive&nbsp;<br>system observability for optimal perfomance</p>",
  __resolveType: "deco-sites/sections/sections/Content/PrimarySection.tsx",
  props: {
    topics: [
      {
        itemsTopics: [
          {
            content: {
              content: [
                "Web is getting increasingly complex (too many frameworks)",
                "Web was once fun",
                "Web is getting too slow (sites are getting heavier)",
                "Software architecture is changing (monolith to composable)",
              ],
              title: "What will you learn",
            },
            title: "A Brief History of Web 📽",
            subTitle:
              "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
          },
          {
            content: {
              content: [
                "Web is getting increasingly complex (too many frameworks)",
                "Web was once fun",
                "Web is getting too slow (sites are getting heavier)",
                "Software architecture is changing (monolith to composable)",
              ],
              title: "What will you learn",
            },
            title: "A Brief History of Web 📽",
            subTitle:
              "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
          },
          {
            content: {
              content: [
                "Web is getting increasingly complex (too many frameworks)",
                "Web was once fun",
                "Web is getting too slow (sites are getting heavier)",
                "Software architecture is changing (monolith to composable)",
              ],
              title: "What will you learn",
            },
            title: "A Brief History of Web 📽",
            subTitle:
              "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
          },
        ],
        title: "The Post-AI Web Builder",
        flagTime: "1 hours",
      },
    ],
    title: "Program",
    subTitle:
      "<p>Unlock advanced audience insights and comprehensive&nbsp;<br>system observability for optimal perfomance</p>",
  },
};

export default function PrimarySection({ props }: { props: Props }) {
  const { title, subTitle, topics } = { ...BASE_PROPS, ...props };

  return (
    <div class="container bg-black flex justify-center flex-col w-full py-6 rounded-3xl px-4">
      <h2 class="text-7xl text-white font-medium text-center mb-9">{title}</h2>
      <span
        class="text-center text-lg text-[#A1A1AA]"
        dangerouslySetInnerHTML={{ __html: subTitle }}
      >
      </span>
      <div class="flex w-full flex-row mt-9 xl:gap-16">
        <div class="w-full lg:w-3/12 flex flex-col lg:gap-3 gap-16">
          {topics.map((topic, indexTopic) => {
            return (
              <div class="rounded-full gap-8 flex flex-col">
                <h3 class="text-accent text-2xl font-semibold">
                  {topic.title}
                </h3>
                {topic.itemsTopics.map((itemTopic, index) => (
                  <ButtonTab
                    {...itemTopic}
                    index={index.toString() + indexTopic.toString()}
                  />
                ))}
              </div>
            );
          })}
        </div>
        <div class="w-3/4 hidden lg:flex flex-col py-8 lg:mx-6 xl:mx-14 ">
          {topics.map((topic, indexTopic) => (
            topic.itemsTopics.map((itemTopic, index) => (
              <Article
                title={itemTopic.title}
                subTitle={itemTopic.subTitle}
                content={itemTopic.content}
                flagTime={itemTopic.flagTime}
                button={itemTopic.button}
                index={index.toString() + indexTopic.toString()}
              />
            ))
          ))}
        </div>
      </div>
    </div>
  );
}

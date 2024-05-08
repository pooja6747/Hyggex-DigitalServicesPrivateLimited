import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import DesktopNineColumngame from "../../components/DesktopNineColumngame";
import DesktopNineComp from "../../components/DesktopNineComp";
import Header from "../../components/Header";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function DesktopNinePage() {
  return (
    <>
      <Helmet>
        <title>Math Flashcards - Study and Test Preparation</title>
        <meta
          name="description"
          content="Explore our Math Flashcards for effective study and test preparation. Engage with interactive quizzes, games, and flashcard sets for learning Mathematics relations and functions."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center justify-center gap-16 bg-gray-50 px-[27px] pb-[307px] pt-[27px] md:pb-5 sm:gap-8 sm:p-5">
        {/* header section */}
        <Header />
        <div className="mx-auto flex w-full max-w-[1236px] flex-col items-start">
          {/* flashcard navigation section */}
          <div className="flex items-center sm:flex-col">
            <div className="flex flex-wrap items-center">
              <Img src="images/img_frame.svg" alt="frame image" className="h-[30px] w-[30px]" />
              <Img src="images/img_arrow_right.svg" alt="right arrow" className="h-[24px] w-[24px]" />
              <Text as="p" className="!font-medium">
                Flashcard
              </Text>
            </div>
            <div className="flex items-center">
              <Img src="images/img_arrow_right.svg" alt="arrow right" className="h-[24px] w-[24px]" />
              <Text as="p" className="!font-medium">
                Mathematics
              </Text>
              <div className="flex items-center">
                <Img src="images/img_arrow_right.svg" alt="arrow right" className="h-[24px] w-[24px]" />
                <Heading size="md" as="h1" className="!text-indigo-900_02">
                  Relation and Function
                </Heading>
              </div>
            </div>
          </div>
          <Heading size="3xl" as="h2" className="mt-[65px] bg-gradient bg-clip-text !font-montserrat">
            Relations and Functions ( Mathematics )
          </Heading>

          {/* content overview section */}
          <div className="mt-12 flex w-[44%] items-center gap-10 self-center md:w-full sm:flex-col">
            <div className="flex w-[16%] flex-col gap-1.5 self-end sm:w-full">
              <div className="flex px-3">
                <Heading size="lg" as="h2" className="!text-indigo-900_02">
                  Study
                </Heading>
              </div>
              <div className="h-[2px] bg-indigo-900_02" />
            </div>
            <div className="flex flex-1 flex-col gap-2 sm:self-stretch">
              <div className="flex px-3">
                <Text size="s" as="p">
                  Quiz
                </Text>
              </div>
              <div className="h-[2px] bg-gray-50" />
            </div>
            <div className="flex flex-1 flex-col gap-2 sm:self-stretch">
              <div className="flex px-3">
                <Text size="s" as="p">
                  Test
                </Text>
              </div>
              <div className="h-[2px] bg-gray-50" />
            </div>
            <div className="flex w-[42%] gap-10 md:flex-row sm:w-full">
              {[...Array(2)].map((d, index) => (
                <DesktopNineColumngame gametext="Game" key={"listContainer" + index} />
              ))}
            </div>
          </div>

          {/* flashcard interaction section */}
          <div className="mt-[30px] flex w-[58%] flex-col items-center gap-8 self-center md:w-full">
            <DesktopNineComp />
            <div className="flex w-[86%] items-center justify-between gap-5 md:w-full">
              <Img src="images/img_vector.png" alt="vector image" className="h-[30px] w-[30px] object-cover" />
              <div className="flex w-[44%] items-center justify-between gap-5">
                <Img src="images/img_vector_60x60.png" alt="small vector" className="h-[60px] w-[60px] object-cover" />
                <Heading size="xl" as="h2" className="!text-blue_gray-900_01">
                  01/10
                </Heading>
                <Img src="images/img_vector_1.png" alt="vector image" className="h-[60px] w-[60px] object-cover" />
              </div>
              <Img src="images/img_vector_30x30.png" alt="small vector" className="h-[30px] w-[30px] object-cover" />
            </div>
          </div>

          {/* publication info section */}
          <div className="mt-20 flex items-center justify-between gap-5 self-stretch sm:flex-col">
            <div className="flex w-[18%] items-start justify-center gap-[21px] sm:w-full">
              <div className="flex flex-col items-center rounded-[40px] bg-white-A700 py-[23px] pl-[17px] pr-[18px] sm:py-5">
                <Img src="images/img_clip_path_group.png" alt="clip path image" className="h-[34px] object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-start gap-[9px]">
                <Heading size="xs" as="h2" className="!text-[12.4px] !text-gray-700">
                  Published by
                </Heading>
                <Img src="images/img_component_40.svg" alt="component image" className="h-[34px] w-full md:h-auto" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" shape="square" className="w-[60px]">
                <Img src="images/img_frame_60x60.png" />
              </Button>
              <Heading size="2xl" as="h3" className="bg-gradient bg-clip-text">
                Create Flashcard
              </Heading>
            </div>
          </div>

          {/* faq section */}
          <div className="mt-[143px] flex w-[69%] flex-col items-start gap-[34px] md:w-full">
            <Heading size="5xl" as="h2" className="bg-gradient bg-clip-text tracking-[0.24px]">
              FAQ
            </Heading>
            <Accordion preExpanded={[0]} className="flex flex-col gap-8 self-stretch">
              {[...Array(3)].map((_, i) => (
                <AccordionItem uuid={i} key={`Expandable List${i}`}>
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="blue_600_02_indigo_900_border flex flex-1 items-center justify-between gap-5 rounded-[12px] border-[0.5px] border-solid px-6 py-[17px] sm:flex-col sm:px-5">
                              <Heading size="s" as="h3" className="self-end !text-gray-900">
                                Can education flashcards be used for all age groups?
                              </Heading>
                            </div>
                          </>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

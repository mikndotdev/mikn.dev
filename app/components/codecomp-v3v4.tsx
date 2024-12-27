export const beforeCode = `<Card className="mt-5 sm:mt-10">
                    <Center className="mt-5">
                        <Image
                            src={KawaiiLogo.src}
                            alt="MikanDev"
                            width={300}
                            height={214}
                            className="mb-5 w-full max-w-[500px] h-auto"
                        />
                    </Center>
                    <Heading
                        className="flex justify-center items-center mt-3 text-center"
                        size="sm"
                        as="h2"
                    >
                        {t("below-main-heading")}
                    </Heading>
                    <Center className="mt-7 mb-5 flex-col sm:flex-row">
                        <Button
                            colorScheme="primary"
                            className="mb-3 sm:mb-0 sm:mr-3 animate-bounce"
                            onClick={() => router.push("/solutions")}
                        >
                            {t("buttons.check_out")}
                        </Button>
                        <Button
                            colorScheme="secondary"
                            className="sm:ml-3"
                            onClick={() => router.push("/account")}
                        >
                            {t("buttons.account")}
                        </Button>
                    </Center>
                </Card>`;

export const afterCode = `<div className={"flex flex-col"}>
        <div
            className={"flex flex-row items-center space-x-3 mb-3"}
        >
            <TbWallet className={"text-primary"} size={30} />
            <h1
                className={
                    "text-md text-white tooltip tooltip-warning"
                }
                data-tip="No VC money here :3"
            >
                Backed by my own pocket money
            </h1>
        </div>
        <div className={"flex flex-row space-x-5"}>
            <h1 className={"text-6xl text-white font-bold"}>
                {t("creating-cool")}
            </h1>
            <Typewriter
                text={[
                    t("stuff"),
                    t("apps"),
                    t("tools"),
                    t("bots"),
                ]}
                speed={70}
                className="text-primary text-6xl"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={"|"}
            />
`;

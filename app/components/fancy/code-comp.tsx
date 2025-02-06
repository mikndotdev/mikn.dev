"use client";

import { LuFile } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface CodeComparisonProps {
	beforeCode: string;
	afterCode: string;
	language: string;
	filename: string;
	lightTheme: string;
	darkTheme: string;
	beforeTitle: string;
	afterTitle: string;
}

export function CodeComparison({
	beforeCode,
	afterCode,
	language,
	filename,
	lightTheme,
	darkTheme,
	beforeTitle,
	afterTitle,
}: CodeComparisonProps) {
	const { theme, systemTheme } = useTheme();
	const [highlightedBefore, setHighlightedBefore] = useState("");
	const [highlightedAfter, setHighlightedAfter] = useState("");

	useEffect(() => {
		const currentTheme = theme === "system" ? systemTheme : theme;
		const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

		async function highlightCode() {
			const before = await codeToHtml(beforeCode, {
				lang: language,
				theme: selectedTheme,
			});
			const after = await codeToHtml(afterCode, {
				lang: language,
				theme: selectedTheme,
			});
			setHighlightedBefore(before);
			setHighlightedAfter(after);
		}

		highlightCode();
	}, [
		theme,
		systemTheme,
		beforeCode,
		afterCode,
		language,
		lightTheme,
		darkTheme,
	]);

	const renderCode = (code: string, highlighted: string) => {
		if (highlighted) {
			return (
				<div
					className="h-full overflow-auto bg-background font-mono text-xs [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
					dangerouslySetInnerHTML={{ __html: highlighted }}
				/>
			);
		} else {
			return (
				<pre className="h-full overflow-auto break-all bg-background p-4 font-mono text-xs text-foreground">
					{code}
				</pre>
			);
		}
	};
	return (
		<div className="mx-auto w-full max-w-5xl max-h-25">
			<div className="relative w-full overflow-hidden rounded-xl border border-border bg-gray-800">
				<div className="relative grid md:grid-cols-2 md:divide-x md:divide-border">
					<div>
						<div className="flex items-center bg-accent p-2 text-sm text-foreground text-white">
							<LuFile className="mr-2 h-4 w-4 text-white" />
							{filename}
							<span className="ml-auto text-white">
								{beforeTitle}
							</span>
						</div>
						{renderCode(beforeCode, highlightedBefore)}
					</div>
					<div>
						<div className="flex items-center bg-accent p-2 text-sm text-foreground text-white">
							<LuFile className="mr-2 h-4 w-4 text-white" />
							{filename}
							<span className="ml-auto text-white">
								{afterTitle}
							</span>
						</div>
						{renderCode(afterCode, highlightedAfter)}
					</div>
				</div>
			</div>
		</div>
	);
}

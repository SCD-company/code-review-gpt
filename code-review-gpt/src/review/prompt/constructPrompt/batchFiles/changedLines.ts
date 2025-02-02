import { createPromptFiles } from "./utils/createPromptFiles";
import { promptsIntoBatches } from "./utils/promptsIntoBatches";
import { PromptFile, ReviewFile } from "../../../../common/types";

export const changedLinesIntoBatches = (
  files: ReviewFile[],
  maxPromptPayloadLength: number,
  largeFileCollector: (promptFile:PromptFile)=>void
): PromptFile[][] => {
  const promptFiles = createPromptFiles(files, maxPromptPayloadLength);

  return promptsIntoBatches(promptFiles, maxPromptPayloadLength,largeFileCollector);
};
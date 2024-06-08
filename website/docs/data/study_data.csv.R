# Attach libraries (must be installed)
library(readr)
library(dplyr)
library(tidyr)

surveyData <- read.csv('docs/data/data_sources/study_data.csv')
cat(format_csv(surveyData))
USE [world-weather]
GO

/****** Object:  Table [dbo].[PostcodeWeather]    Script Date: 02/09/2022 21:43:41 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PostcodeWeather]') AND type in (N'U'))
DROP TABLE [dbo].[PostcodeWeather]
GO

/****** Object:  Table [dbo].[PostcodeWeather]    Script Date: 02/09/2022 21:43:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PostcodeWeather](
	[postcode] [nchar](10) NOT NULL,
	[condition] [nvarchar](50) NULL,
	[averageTempC] [float] NULL,
	[maxTempC] [float] NULL,
	[minTempC] [float] NULL,
	[date] [datetime2](7) NOT NULL
) ON [PRIMARY]
GO



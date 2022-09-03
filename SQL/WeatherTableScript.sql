USE [world-weather]
GO

/****** Object:  Table [dbo].[PostcodeWeather]    Script Date: 02/09/2022 23:24:54 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PostcodeWeather]') AND type in (N'U'))
DROP TABLE [dbo].[PostcodeWeather]
GO

/****** Object:  Table [dbo].[PostcodeWeather]    Script Date: 02/09/2022 23:24:54 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PostcodeWeather](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[postcode] [nchar](10) NOT NULL,
	[condition] [nvarchar](50) NULL,
	[averageTempC] [decimal](5, 2) NULL,
	[maxTempC] [decimal](5, 2) NULL,
	[minTempC] [decimal](5, 2) NULL,
	[date] [datetime2](7) NOT NULL
) ON [PRIMARY]
GO



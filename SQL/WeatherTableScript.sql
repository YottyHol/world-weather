USE [world-weather]
GO

/****** Object:  Table [dbo].[PostcodeWeather]    Script Date: 03/09/2022 01:16:57 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PostcodeWeather]') AND type in (N'U'))
DROP TABLE [dbo].[PostcodeWeather]
GO

/****** Object:  Table [dbo].[PostcodeWeather]    Script Date: 03/09/2022 01:16:57 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PostcodeWeather](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[postcode] [nvarchar](255) NOT NULL,
	[condition] [nvarchar](255) NULL,
	[averageTempC] [decimal](5, 2) NULL,
	[maxTempC] [decimal](5, 2) NULL,
	[minTempC] [decimal](5, 2) NULL,
	[date] [datetime] NOT NULL,
 CONSTRAINT [PK_82d796781783a4ef633ac3def1a] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO




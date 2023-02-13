<?xml version="1.0" encoding="utf-8"?>
                                    <!-- xsl is a namespace  -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
                <title>XML Tutorial</title>
                <style type="text/css">
                    <!-- table{
                        border: 2px solid blue;
                        width: 100%;
                    }
                    th{
                        border: 2px solid red;
                    }
                    td{
                        border: 2px solid green;
                    }
                    .tr{
                        background-color:lightgreen;
                    } -->
                </style>
            </head>
            <body>
                <table class="table table-dark table-hover">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    <xsl:for-each select="person/user">
                    <xsl:sort select="fname" order="ascending"/>
                    <tr class='tr'>
                            
                            <td>
                                <xsl:value-of select="@type"/>
                            </td>
                            <td>
                                <xsl:value-of select="fname"/>
                            </td>
                            <td>
                                <xsl:value-of select="lname"/>
                            </td>
                            <td>
                                <xsl:value-of select="email"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
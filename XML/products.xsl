<?xml version="1.0" encoding="utf-8"?>
                                    <!-- xsl is a namespace  -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
                <title>Food Item</title>
              <style>
                #img img{
                    width:100px;
                    height: 100px;
                }
              </style>
            </head>
            <body>
                <table class="table table-dark table-hover">
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                    <xsl:for-each select="productList/productItem">
                    <xsl:sort select="fname" order="ascending"/>
                    <tr class='tr'>
                            
                            <td>
                                <xsl:value-of select="title"/>
                            </td>
                            <td>
                                <xsl:value-of select="price"/>
                            </td>
                            <td>
                                <xsl:value-of select="dec"/>
                            </td>
                            <td id='img'>
                                <xsl:element name="img">
                                    <xsl:attribute name="src">
                                        <xsl:value-of select="image"/>
                                    </xsl:attribute>
                                </xsl:element>
                            </td>
                        </tr>
                        
                    </xsl:for-each>
                </table>
                <img src="xs" alt="burger" />
                
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
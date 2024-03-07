package com.view26.pageview;

import com.atlassian.activeobjects.external.ActiveObjects;
import com.atlassian.plugin.spring.scanner.annotation.component.Scanned;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import org.springframework.beans.factory.annotation.Autowired;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.google.common.base.Preconditions.*;

@Scanned
public final class TodoServlet extends HttpServlet
{
    @ComponentImport
    private final ActiveObjects ao;

    @Autowired
    public TodoServlet(ActiveObjects ao)
    {
        this.ao = checkNotNull(ao);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
    {
        res.getWriter().write("Todo servlet, doGet");
        res.getWriter().close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
    {
        res.getWriter().write("Todo servlet, doPost");
        res.getWriter().close();
    }
}